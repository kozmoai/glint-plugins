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
  coreServices,
  createBackendPlugin,
} from '@kozmoai/backend-plugin-api';
import { createRouter } from './service/router';
import { extractAirbrakeConfig } from './config';

/**
 * The Airbrake Backend plugin.
 *
 * @public
 */
export const airbrakePlugin = createBackendPlugin({
  pluginId: 'airbrake',
  register(env) {
    env.registerInit({
      deps: {
        config: coreServices.rootConfig,
        logger: coreServices.logger,
        httpRouter: coreServices.httpRouter,
      },
      async init({ logger, httpRouter, config }) {
        httpRouter.use(
          await createRouter({
            airbrakeConfig: extractAirbrakeConfig(config),
            logger: loggerToWinstonLogger(logger),
          }),
        );
      },
    });
  },
});