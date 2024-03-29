/*
 * Copyright 2022 The Glint Authors
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
import { Octokit } from '@octokit/rest';
import {
  useApi,
  githubAuthApiRef,
  configApiRef,
} from '@kozmoai/core-plugin-api';
import { readGithubIntegrationConfigs } from '@kozmoai/integration';

let octokit: any;

export const useOctokitGraphQl = <T>() => {
  const auth = useApi(githubAuthApiRef);
  const config = useApi(configApiRef);

  const baseUrl = readGithubIntegrationConfigs(
    config.getOptionalConfigArray('integrations.github') ?? [],
  )[0].apiBaseUrl;

  return (path: string, options?: any): Promise<T> =>
    auth
      .getAccessToken(['repo'])
      .then((token: string) => {
        if (!octokit) {
          octokit = new Octokit({ auth: token, ...(baseUrl && { baseUrl }) });
        }

        return octokit;
      })
      .then(octokitInstance => {
        return octokitInstance.graphql(path, options);
      });
};