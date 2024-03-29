/*
 * Copyright 2021 The Glint Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { createRootLogger } from '@kozmoai/backend-common';
import { ConfigReader } from '@kozmoai/config';
import {
  GithubCredentialsProvider,
  ScmIntegrations,
} from '@kozmoai/integration';
import {
  ActionContext,
  TemplateAction,
} from '@kozmoai/plugin-scaffolder-node';
import fs from 'fs-extra';
import { createPublishGithubPullRequestAction } from './githubPullRequest';
import { createMockDirectory } from '@kozmoai/backend-test-utils';
import { createMockActionContext } from '@kozmoai/plugin-scaffolder-node-test-utils';

// Make sure root logger is initialized ahead of FS mock
createRootLogger();

type GithubPullRequestActionInput = ReturnType<
  typeof createPublishGithubPullRequestAction
> extends TemplateAction<infer U>
  ? U
  : never;

describe('createPublishGithubPullRequestAction', () => {
  let instance: TemplateAction<GithubPullRequestActionInput>;
  let fakeClient: {
    createPullRequest: jest.Mock;
    rest: {
      pulls: { requestReviewers: jest.Mock };
    };
  };

  const mockDir = createMockDirectory();
  const workspacePath = mockDir.resolve('workspace');

  beforeEach(() => {
    mockDir.clear();

    const integrations = ScmIntegrations.fromConfig(new ConfigReader({}));
    fakeClient = {
      createPullRequest: jest.fn(async (_: any) => {
        return {
          url: 'https://api.github.com/myorg/myrepo/pull/123',
          headers: {},
          status: 201,
          data: {
            html_url: 'https://github.com/myorg/myrepo/pull/123',
            number: 123,
            base: {
              ref: 'main',
            },
          },
        };
      }),
      rest: {
        pulls: {
          requestReviewers: jest.fn(async (_: any) => ({ data: {} })),
        },
      },
    };
    const clientFactory = jest.fn(async () => fakeClient as any);
    const githubCredentialsProvider: GithubCredentialsProvider = {
      getCredentials: jest.fn(),
    };

    instance = createPublishGithubPullRequestAction({
      integrations,
      githubCredentialsProvider,
      clientFactory,
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('with targetBranchName', () => {
    let input: GithubPullRequestActionInput;
    let ctx: ActionContext<GithubPullRequestActionInput>;

    beforeEach(() => {
      fakeClient = {
        createPullRequest: jest.fn(async (_: any) => {
          return {
            url: 'https://api.github.com/myorg/myrepo/pull/123',
            headers: {},
            status: 201,
            data: {
              html_url: 'https://github.com/myorg/myrepo/pull/123',
              number: 123,
              base: {
                ref: 'test',
              },
            },
          };
        }),
        rest: {
          pulls: {
            requestReviewers: jest.fn(async (_: any) => ({ data: {} })),
          },
        },
      };

      input = {
        repoUrl: 'github.com?owner=myorg&repo=myrepo',
        title: 'Create my new app',
        branchName: 'new-app',
        targetBranchName: 'test',
        description: 'This PR is really good',
        draft: true,
      };

      mockDir.setContent({
        [workspacePath]: { 'file.txt': 'Hello there!' },
      });

      ctx = createMockActionContext({ input, workspacePath });
    });

    it('creates a pull request', async () => {
      await instance.handler(ctx);

      expect(fakeClient.createPullRequest).toHaveBeenCalledWith({
        owner: 'myorg',
        repo: 'myrepo',
        title: 'Create my new app',
        head: 'new-app',
        base: 'test',
        body: 'This PR is really good',
        draft: true,
        changes: [
          {
            commit: 'Create my new app',
            files: {
              'file.txt': {
                content: Buffer.from('Hello there!').toString('base64'),
                encoding: 'base64',
                mode: '100644',
              },
            },
          },
        ],
      });
    });

    it('creates outputs for the pull request url and number', async () => {
      await instance.handler(ctx);

      expect(ctx.output).toHaveBeenCalledWith('targetBranchName', 'test');
      expect(ctx.output).toHaveBeenCalledWith(
        'remoteUrl',
        'https://github.com/myorg/myrepo/pull/123',
      );
      expect(ctx.output).toHaveBeenCalledWith('pullRequestNumber', 123);
    });
  });

  describe('with no sourcePath', () => {
    let input: GithubPullRequestActionInput;
    let ctx: ActionContext<GithubPullRequestActionInput>;

    beforeEach(() => {
      input = {
        repoUrl: 'github.com?owner=myorg&repo=myrepo',
        title: 'Create my new app',
        branchName: 'new-app',
        description: 'This PR is really good',
        draft: true,
      };

      mockDir.setContent({
        [workspacePath]: { 'file.txt': 'Hello there!' },
      });

      ctx = createMockActionContext({ input, workspacePath });
    });

    it('creates a pull request', async () => {
      await instance.handler(ctx);

      expect(fakeClient.createPullRequest).toHaveBeenCalledWith({
        owner: 'myorg',
        repo: 'myrepo',
        title: 'Create my new app',
        head: 'new-app',
        body: 'This PR is really good',
        draft: true,
        changes: [
          {
            commit: 'Create my new app',
            files: {
              'file.txt': {
                content: Buffer.from('Hello there!').toString('base64'),
                encoding: 'base64',
                mode: '100644',
              },
            },
          },
        ],
      });
    });

    it('creates outputs for the pull request url and number', async () => {
      await instance.handler(ctx);

      expect(ctx.output).toHaveBeenCalledWith('targetBranchName', 'main');
      expect(ctx.output).toHaveBeenCalledWith(
        'remoteUrl',
        'https://github.com/myorg/myrepo/pull/123',
      );
      expect(ctx.output).toHaveBeenCalledWith('pullRequestNumber', 123);
    });
  });

  describe('with sourcePath', () => {
    let input: GithubPullRequestActionInput;
    let ctx: ActionContext<GithubPullRequestActionInput>;

    beforeEach(() => {
      input = {
        repoUrl: 'github.com?owner=myorg&repo=myrepo',
        title: 'Create my new app',
        branchName: 'new-app',
        description: 'This PR is really good',
        sourcePath: 'source',
      };

      mockDir.setContent({
        [workspacePath]: {
          source: { 'foo.txt': 'Hello there!' },
          irrelevant: { 'bar.txt': 'Nothing to see here' },
        },
      });

      ctx = createMockActionContext({ input, workspacePath });
    });

    it('creates a pull request with only relevant files', async () => {
      await instance.handler(ctx);

      expect(fakeClient.createPullRequest).toHaveBeenCalledWith({
        owner: 'myorg',
        repo: 'myrepo',
        title: 'Create my new app',
        head: 'new-app',
        body: 'This PR is really good',
        changes: [
          {
            commit: 'Create my new app',
            files: {
              'foo.txt': {
                content: Buffer.from('Hello there!').toString('base64'),
                encoding: 'base64',
                mode: '100644',
              },
            },
          },
        ],
      });
    });

    it('should not allow to use files outside of the workspace', async () => {
      input.sourcePath = '../../test';

      await expect(instance.handler(ctx)).rejects.toThrow(
        'Relative path is not allowed to refer to a directory outside its parent',
      );
    });
  });

  describe('with repoUrl', () => {
    let input: GithubPullRequestActionInput;
    let ctx: ActionContext<GithubPullRequestActionInput>;

    beforeEach(() => {
      input = {
        repoUrl: 'github.com?owner=myorg&repo=myrepo',
        title: 'Create my new app',
        branchName: 'new-app',
        description: 'This PR is really good',
      };

      mockDir.setContent({
        [workspacePath]: { 'file.txt': 'Hello there!' },
      });

      ctx = createMockActionContext({ input, workspacePath });
    });
    it('creates a pull request', async () => {
      await instance.handler(ctx);

      expect(fakeClient.createPullRequest).toHaveBeenCalledWith({
        owner: 'myorg',
        repo: 'myrepo',
        title: 'Create my new app',
        head: 'new-app',
        body: 'This PR is really good',
        changes: [
          {
            commit: 'Create my new app',
            files: {
              'file.txt': {
                content: Buffer.from('Hello there!').toString('base64'),
                encoding: 'base64',
                mode: '100644',
              },
            },
          },
        ],
      });
    });

    it('creates outputs for the pull request url and number', async () => {
      await instance.handler(ctx);

      expect(ctx.output).toHaveBeenCalledWith(
        'remoteUrl',
        'https://github.com/myorg/myrepo/pull/123',
      );
      expect(ctx.output).toHaveBeenCalledWith('pullRequestNumber', 123);
    });
  });

  describe('with reviewers and teamReviewers', () => {
    let input: GithubPullRequestActionInput;
    let ctx: ActionContext<GithubPullRequestActionInput>;

    beforeEach(() => {
      input = {
        repoUrl: 'github.com?owner=myorg&repo=myrepo',
        title: 'Create my new app',
        branchName: 'new-app',
        description: 'This PR is really good',
        reviewers: ['foobar'],
        teamReviewers: ['team-foo', 'team-foo', 'team-bar'],
      };

      mockDir.setContent({ [workspacePath]: {} });

      ctx = createMockActionContext({ input, workspacePath });
    });

    it('creates a pull request and requests a review from the given reviewers', async () => {
      await instance.handler(ctx);

      expect(fakeClient.createPullRequest).toHaveBeenCalled();
      expect(fakeClient.rest.pulls.requestReviewers).toHaveBeenCalledWith({
        owner: 'myorg',
        repo: 'myrepo',
        pull_number: 123,
        reviewers: ['foobar'],
        team_reviewers: ['team-foo', 'team-bar'],
      });
    });

    it('creates outputs for the pull request url and number even if requesting reviewers fails', async () => {
      fakeClient.rest.pulls.requestReviewers.mockImplementation(() => {
        throw new Error('a random error');
      });

      await instance.handler(ctx);

      expect(ctx.output).toHaveBeenCalledWith(
        'remoteUrl',
        'https://github.com/myorg/myrepo/pull/123',
      );
      expect(ctx.output).toHaveBeenCalledWith('pullRequestNumber', 123);
    });
  });

  describe('with no reviewers and teamReviewers', () => {
    let input: GithubPullRequestActionInput;
    let ctx: ActionContext<GithubPullRequestActionInput>;

    beforeEach(() => {
      input = {
        repoUrl: 'github.com?owner=myorg&repo=myrepo',
        title: 'Create my new app',
        branchName: 'new-app',
        description: 'This PR is really good',
      };

      mockDir.setContent({ [workspacePath]: {} });

      ctx = createMockActionContext({ input, workspacePath });
    });

    it('does not call the API endpoint for requesting reviewers', async () => {
      await instance.handler(ctx);

      expect(fakeClient.createPullRequest).toHaveBeenCalled();
      expect(fakeClient.rest.pulls.requestReviewers).not.toHaveBeenCalled();
    });
  });

  describe('with broken symlink', () => {
    let input: GithubPullRequestActionInput;
    let ctx: ActionContext<GithubPullRequestActionInput>;

    beforeEach(() => {
      input = {
        repoUrl: 'github.com?owner=myorg&repo=myrepo',
        title: 'Create my new app',
        branchName: 'new-app',
        description: 'This PR is really good',
      };

      mockDir.setContent({
        [workspacePath]: {
          Makefile: c => c.symlink('../../nothing/yet'),
        },
      });

      ctx = createMockActionContext({ input, workspacePath });
    });
    it('creates a pull request', async () => {
      await instance.handler(ctx);

      expect(fakeClient.createPullRequest).toHaveBeenCalledWith({
        owner: 'myorg',
        repo: 'myrepo',
        title: 'Create my new app',
        head: 'new-app',
        body: 'This PR is really good',
        changes: [
          {
            commit: 'Create my new app',
            files: {
              Makefile: {
                content: Buffer.from('../../nothing/yet').toString('utf-8'),
                encoding: 'utf-8',
                mode: '120000',
              },
            },
          },
        ],
      });
    });
  });

  describe('with executable file mode 755', () => {
    let input: GithubPullRequestActionInput;
    let ctx: ActionContext<GithubPullRequestActionInput>;

    beforeEach(() => {
      input = {
        repoUrl: 'github.com?owner=myorg&repo=myrepo',
        title: 'Create my new app',
        branchName: 'new-app',
        description: 'This PR is really good',
      };

      mockDir.setContent({
        [workspacePath]: {
          'hello.sh': c =>
            fs.writeFileSync(c.path, 'echo Hello there!', {
              encoding: 'utf8',
              mode: 0o100755,
            }),
        },
      });

      ctx = createMockActionContext({ input, workspacePath });
    });
    it('creates a pull request', async () => {
      await instance.handler(ctx);

      expect(fakeClient.createPullRequest).toHaveBeenCalledWith({
        owner: 'myorg',
        repo: 'myrepo',
        title: 'Create my new app',
        head: 'new-app',
        body: 'This PR is really good',
        changes: [
          {
            commit: 'Create my new app',
            files: {
              'hello.sh': {
                content: Buffer.from('echo Hello there!').toString('base64'),
                encoding: 'base64',
                mode: '100755',
              },
            },
          },
        ],
      });
    });

    it('creates outputs for the pull request url and number', async () => {
      await instance.handler(ctx);

      expect(ctx.output).toHaveBeenCalledWith(
        'remoteUrl',
        'https://github.com/myorg/myrepo/pull/123',
      );
      expect(ctx.output).toHaveBeenCalledWith('pullRequestNumber', 123);
    });
  });

  describe('with executable file mode 775', () => {
    let input: GithubPullRequestActionInput;
    let ctx: ActionContext<GithubPullRequestActionInput>;

    beforeEach(() => {
      input = {
        repoUrl: 'github.com?owner=myorg&repo=myrepo',
        title: 'Create my new app',
        branchName: 'new-app',
        description: 'This PR is really good',
      };

      mockDir.setContent({
        [workspacePath]: {
          'hello.sh': c =>
            fs.writeFileSync(c.path, 'echo Hello there!', {
              encoding: 'utf8',
              mode: 0o100775,
            }),
        },
      });

      ctx = createMockActionContext({ input, workspacePath });
    });
    it('creates a pull request', async () => {
      await instance.handler(ctx);

      expect(fakeClient.createPullRequest).toHaveBeenCalledWith({
        owner: 'myorg',
        repo: 'myrepo',
        title: 'Create my new app',
        head: 'new-app',
        body: 'This PR is really good',
        changes: [
          {
            commit: 'Create my new app',
            files: {
              'hello.sh': {
                content: Buffer.from('echo Hello there!').toString('base64'),
                encoding: 'base64',
                mode: '100755',
              },
            },
          },
        ],
      });
    });

    it('creates outputs for the pull request url and number', async () => {
      await instance.handler(ctx);

      expect(ctx.output).toHaveBeenCalledWith(
        'remoteUrl',
        'https://github.com/myorg/myrepo/pull/123',
      );
      expect(ctx.output).toHaveBeenCalledWith('pullRequestNumber', 123);
    });
  });

  describe('with commit message', () => {
    let input: GithubPullRequestActionInput;
    let ctx: ActionContext<GithubPullRequestActionInput>;

    beforeEach(() => {
      input = {
        repoUrl: 'github.com?owner=myorg&repo=myrepo',
        title: 'Create my new app',
        branchName: 'new-app',
        description: 'This PR is really good',
        commitMessage: 'Create my new app, but in the commit message',
      };

      mockDir.setContent({
        [workspacePath]: { 'file.txt': 'Hello there!' },
      });

      ctx = createMockActionContext({ input, workspacePath });
    });

    it('creates a pull request', async () => {
      await instance.handler(ctx);

      expect(fakeClient.createPullRequest).toHaveBeenCalledWith({
        owner: 'myorg',
        repo: 'myrepo',
        title: 'Create my new app',
        head: 'new-app',
        body: 'This PR is really good',
        changes: [
          {
            commit: 'Create my new app, but in the commit message',
            files: {
              'file.txt': {
                content: Buffer.from('Hello there!').toString('base64'),
                encoding: 'base64',
                mode: '100644',
              },
            },
          },
        ],
      });
    });
  });

  describe('with force fork', () => {
    let input: GithubPullRequestActionInput;
    let ctx: ActionContext<GithubPullRequestActionInput>;

    beforeEach(() => {
      input = {
        repoUrl: 'github.com?owner=myorg&repo=myrepo',
        title: 'Create my new app',
        branchName: 'new-app',
        description: 'This PR is really good',
        forceFork: true,
      };

      mockDir.setContent({
        [workspacePath]: { 'file.txt': 'Hello there!' },
      });

      ctx = createMockActionContext({ input, workspacePath });
    });

    it('creates a pull request', async () => {
      await instance.handler(ctx);

      expect(fakeClient.createPullRequest).toHaveBeenCalledWith({
        owner: 'myorg',
        repo: 'myrepo',
        title: 'Create my new app',
        head: 'new-app',
        body: 'This PR is really good',
        changes: [
          {
            commit: 'Create my new app',
            files: {
              'file.txt': {
                content: Buffer.from('Hello there!').toString('base64'),
                encoding: 'base64',
                mode: '100644',
              },
            },
          },
        ],
        forceFork: true,
      });
    });
  });
});