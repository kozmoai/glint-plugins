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

import { loggerToWinstonLogger } from '@kozmoai/backend-common';
import {
  createBackendPlugin,
  coreServices,
} from '@kozmoai/backend-plugin-api';
import { DefaultJenkinsInfoProvider } from './service/jenkinsInfoProvider';
import { createRouter } from './service/router';
import { catalogServiceRef } from '@kozmoai/plugin-catalog-node/alpha';

/**
 * Jenkins backend plugin
 *
 * @public
 */
export const jenkinsPlugin = createBackendPlugin({
  pluginId: 'jenkins',
  register(env) {
    env.registerInit({
      deps: {
        logger: coreServices.logger,
        permissions: coreServices.permissions,
        httpRouter: coreServices.httpRouter,
        config: coreServices.rootConfig,
        catalogClient: catalogServiceRef,
        discovery: coreServices.discovery,
        auth: coreServices.auth,
      },
      async init({
        logger,
        permissions,
        httpRouter,
        config,
        catalogClient,
        discovery,
        auth,
      }) {
        const winstonLogger = loggerToWinstonLogger(logger);
        const jenkinsInfoProvider = DefaultJenkinsInfoProvider.fromConfig({
          auth,
          config,
          catalog: catalogClient,
          discovery,
        });
        httpRouter.use(
          await createRouter({
            permissions,
            /**
             * Logger for logging purposes
             */
            logger: winstonLogger,
            /**
             * Info provider to be able to get all necessary information for the APIs
             */
            jenkinsInfoProvider,
            discovery,
            auth,
          }),
        );
      },
    });
  },
});