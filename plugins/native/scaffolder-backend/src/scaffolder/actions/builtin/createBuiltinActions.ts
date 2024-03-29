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

import { UrlReader } from '@kozmoai/backend-common';
import { CatalogApi } from '@kozmoai/catalog-client';
import { Config } from '@kozmoai/config';
import {
  DefaultGithubCredentialsProvider,
  GithubCredentialsProvider,
  ScmIntegrations,
} from '@kozmoai/integration';
import {
  TemplateAction,
  TemplateFilter,
  TemplateGlobal,
} from '@kozmoai/plugin-scaffolder-node';
import {
  createCatalogRegisterAction,
  createCatalogWriteAction,
  createFetchCatalogEntityAction,
} from './catalog';

import { createDebugLogAction, createWaitAction } from './debug';
import {
  createFetchPlainAction,
  createFetchPlainFileAction,
  createFetchTemplateAction,
} from './fetch';
import {
  createFilesystemDeleteAction,
  createFilesystemRenameAction,
} from './filesystem';
import {
  createGithubActionsDispatchAction,
  createGithubAutolinksAction,
  createGithubDeployKeyAction,
  createGithubEnvironmentAction,
  createGithubIssuesLabelAction,
  createGithubRepoCreateAction,
  createGithubRepoPushAction,
  createGithubWebhookAction,
  createPublishGithubAction,
  createPublishGithubPullRequestAction,
} from '@kozmoai/plugin-scaffolder-backend-module-github';

import { createPublishAzureAction } from '@kozmoai/plugin-scaffolder-backend-module-azure';

import { createPublishBitbucketAction } from '@kozmoai/plugin-scaffolder-backend-module-bitbucket';

import {
  createPublishBitbucketCloudAction,
  createBitbucketPipelinesRunAction,
} from '@kozmoai/plugin-scaffolder-backend-module-bitbucket-cloud';

import {
  createPublishBitbucketServerAction,
  createPublishBitbucketServerPullRequestAction,
} from '@kozmoai/plugin-scaffolder-backend-module-bitbucket-server';

import {
  createPublishGerritAction,
  createPublishGerritReviewAction,
} from '@kozmoai/plugin-scaffolder-backend-module-gerrit';

import {
  createPublishGitlabAction,
  createGitlabRepoPushAction,
  createPublishGitlabMergeRequestAction,
} from '@kozmoai/plugin-scaffolder-backend-module-gitlab';

import { createPublishGiteaAction } from '@kozmoai/plugin-scaffolder-backend-module-gitea';
import { AuthService } from '@kozmoai/backend-plugin-api';

/**
 * The options passed to {@link createBuiltinActions}
 * @public
 */
export interface CreateBuiltInActionsOptions {
  /**
   * The {@link @kozmoai/backend-common#UrlReader} interface that will be used in the default actions.
   */
  reader: UrlReader;
  /**
   * The {@link @kozmoai/integrations#ScmIntegrations} that will be used in the default actions.
   */
  integrations: ScmIntegrations;
  /**
   * The {@link @kozmoai/catalog-client#CatalogApi} that will be used in the default actions.
   */
  catalogClient: CatalogApi;
  /**
   * The {@link @kozmoai/backend-plugin-api#AuthService} that will be used in the default actions.
   */
  auth?: AuthService;
  /**
   * The {@link @kozmoai/config#Config} that will be used in the default actions.
   */
  config: Config;
  /**
   * Additional custom filters that will be passed to the nunjucks template engine for use in
   * Template Manifests and also template skeleton files when using `fetch:template`.
   */
  additionalTemplateFilters?: Record<string, TemplateFilter>;
  additionalTemplateGlobals?: Record<string, TemplateGlobal>;
}

/**
 * A function to generate create a list of default actions that the scaffolder provides.
 * Is called internally in the default setup, but can be used when adding your own actions or overriding the default ones
 *
 * TODO(blam): version 2 of the scaffolder shouldn't ship with the additional modules. We should ship the basics, and let people install
 * modules for the providers they want to use.
 * @public
 * @returns A list of actions that can be used in the scaffolder
 *
 */
export const createBuiltinActions = (
  options: CreateBuiltInActionsOptions,
): TemplateAction[] => {
  const {
    reader,
    integrations,
    catalogClient,
    auth,
    config,
    additionalTemplateFilters,
    additionalTemplateGlobals,
  } = options;

  const githubCredentialsProvider: GithubCredentialsProvider =
    DefaultGithubCredentialsProvider.fromIntegrations(integrations);

  const actions = [
    createFetchPlainAction({
      reader,
      integrations,
    }),
    createFetchPlainFileAction({
      reader,
      integrations,
    }),
    createFetchTemplateAction({
      integrations,
      reader,
      additionalTemplateFilters,
      additionalTemplateGlobals,
    }),
    createPublishGerritAction({
      integrations,
      config,
    }),
    createPublishGerritReviewAction({
      integrations,
      config,
    }),
    createPublishGiteaAction({
      integrations,
      config,
    }),
    createPublishGithubAction({
      integrations,
      config,
      githubCredentialsProvider,
    }),
    createPublishGithubPullRequestAction({
      integrations,
      githubCredentialsProvider,
    }),
    createPublishGitlabAction({
      integrations,
      config,
    }),
    createPublishGitlabMergeRequestAction({
      integrations,
    }),
    createGitlabRepoPushAction({
      integrations,
    }),
    createPublishBitbucketAction({
      integrations,
      config,
    }),
    createPublishBitbucketCloudAction({
      integrations,
      config,
    }),
    createPublishBitbucketServerAction({
      integrations,
      config,
    }),
    createPublishBitbucketServerPullRequestAction({
      integrations,
      config,
    }),
    createPublishAzureAction({
      integrations,
      config,
    }),
    createDebugLogAction(),
    createWaitAction(),
    createCatalogRegisterAction({ catalogClient, integrations, auth }),
    createFetchCatalogEntityAction({ catalogClient, auth }),
    createCatalogWriteAction(),
    createFilesystemDeleteAction(),
    createFilesystemRenameAction(),
    createGithubActionsDispatchAction({
      integrations,
      githubCredentialsProvider,
    }),
    createGithubWebhookAction({
      integrations,
      githubCredentialsProvider,
    }),
    createGithubIssuesLabelAction({
      integrations,
      githubCredentialsProvider,
    }),
    createGithubRepoCreateAction({
      integrations,
      githubCredentialsProvider,
    }),
    createGithubRepoPushAction({
      integrations,
      config,
      githubCredentialsProvider,
    }),
    createGithubEnvironmentAction({
      integrations,
    }),
    createGithubDeployKeyAction({
      integrations,
    }),
    createGithubAutolinksAction({
      integrations,
      githubCredentialsProvider,
    }),
    createBitbucketPipelinesRunAction({
      integrations,
    }),
  ];

  return actions as TemplateAction[];
};