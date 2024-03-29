/*
 * Copyright 2024 The Kozmoai Authors
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

import { TemplateExample } from '@kozmoai/plugin-scaffolder-node';
import yaml from 'yaml';

export const examples: TemplateExample[] = [
  {
    description:
      'Initializes a Gitea repository using the content of the workspace and publish it to Gitea with default configuration.',
    example: yaml.stringify({
      steps: [
        {
          id: 'publish',
          action: 'publish:gitea',
          name: 'Publish to Gitea',
          input: {
            repoUrl: 'gitea.com?repo=repo&owner=owner',
          },
        },
      ],
    }),
  },
  {
    description: 'Initializes a Gitea repository with a description.',
    example: yaml.stringify({
      steps: [
        {
          id: 'publish',
          action: 'publish:gitea',
          name: 'Publish to Gitea',
          input: {
            repoUrl: 'gitea.com?repo=repo&owner=owner',
            description: 'Initialize a gitea repository',
          },
        },
      ],
    }),
  },
  {
    description:
      'Initializes a Gitea repository with a default Branch, if not set defaults to main',
    example: yaml.stringify({
      steps: [
        {
          id: 'publish',
          action: 'publish:gitea',
          name: 'Publish to Gitea',
          input: {
            repoUrl: 'gitea.com?repo=repo&owner=owner',
            defaultBranch: 'main',
          },
        },
      ],
    }),
  },
  {
    description:
      'Initializes a Gitea repository with an initial commit message, if not set defaults to initial commit',
    example: yaml.stringify({
      steps: [
        {
          id: 'publish',
          action: 'publish:gitea',
          name: 'Publish to Gitea',
          input: {
            repoUrl: 'gitea.com?repo=repo&owner=owner',
            gitCommitMessage: 'Initial Commit Message',
          },
        },
      ],
    }),
  },
  {
    description:
      'Initializes a Gitea repository with a repo Author Name, if not set defaults to Scaffolder',
    example: yaml.stringify({
      steps: [
        {
          id: 'publish',
          action: 'publish:gitea',
          name: 'Publish to Gitea',
          input: {
            repoUrl: 'gitea.com?repo=repo&owner=owner',
            gitAuthorName: 'John Doe',
          },
        },
      ],
    }),
  },
  {
    description: 'Initializes a Gitea repository with a repo Author Email',
    example: yaml.stringify({
      steps: [
        {
          id: 'publish',
          action: 'publish:gitea',
          name: 'Publish to Gitea',
          input: {
            repoUrl: 'gitea.com?repo=repo&owner=owner',
            gitAuthorEmail: 'johndoe@email.com',
          },
        },
      ],
    }),
  },
  {
    description:
      'Path within the workspace that will be used as the repository root. If omitted, the entire workspace will be published as the repository',
    example: yaml.stringify({
      steps: [
        {
          id: 'publish',
          action: 'publish:gitea',
          name: 'Publish to Gitea',
          input: {
            repoUrl: 'gitea.com?repo=repo&owner=owner',
            sourcePath: 'repository/',
          },
        },
      ],
    }),
  },
  {
    description: 'Initializes a Gitea repository with all properties being set',
    example: yaml.stringify({
      steps: [
        {
          id: 'publish',
          action: 'publish:gitea',
          name: 'Publish to Gitea',
          input: {
            repoUrl: 'gitea.com?repo=repo&owner=owner',
            description: 'Initialize a gitea repository',
            defaultBranch: 'staging',
            gitCommitMessage: 'Initial Commit Message',
            gitAuthorName: 'John Doe',
            gitAuthorEmail: 'johndoe@email.com',
            sourcePath: 'repository/',
          },
        },
      ],
    }),
  },
];