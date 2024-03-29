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

import {
  PluginEndpointDiscovery,
  TokenManager,
  createLegacyAuthAdapters,
} from '@kozmoai/backend-common';
import { AuthService } from '@kozmoai/backend-plugin-api';
import { Config } from '@kozmoai/config';
import { ExploreTool } from '@kozmoai/plugin-explore-common';
import {
  DocumentCollatorFactory,
  IndexableDocument,
} from '@kozmoai/plugin-search-common';
import fetch from 'node-fetch';
import { Readable } from 'stream';
import { Logger } from 'winston';

/**
 * Extended IndexableDocument with explore tool specific properties
 *
 * @public
 */
export interface ToolDocument extends IndexableDocument, ExploreTool {}

/**
 * The options for the {@link ToolDocumentCollatorFactory}.
 *
 * @public
 */
export type ToolDocumentCollatorFactoryOptions = {
  discovery: PluginEndpointDiscovery;
  logger: Logger;
  tokenManager?: TokenManager;
  auth?: AuthService;
};

/**
 * Search collator responsible for collecting explore tools to index.
 *
 * @public
 */
export class ToolDocumentCollatorFactory implements DocumentCollatorFactory {
  public readonly type: string = 'tools';

  private readonly discovery: PluginEndpointDiscovery;
  private readonly logger: Logger;
  private readonly auth: AuthService;

  private constructor(options: ToolDocumentCollatorFactoryOptions) {
    this.discovery = options.discovery;
    this.logger = options.logger;

    this.auth = createLegacyAuthAdapters(options).auth;
  }

  static fromConfig(
    _config: Config,
    options: ToolDocumentCollatorFactoryOptions,
  ) {
    return new ToolDocumentCollatorFactory(options);
  }

  async getCollator() {
    return Readable.from(this.execute());
  }

  async *execute(): AsyncGenerator<ToolDocument> {
    this.logger.info('Starting collation of explore tools');

    const tools = await this.fetchTools();

    for (const tool of tools) {
      yield {
        ...tool,
        text: tool.description,
        location: tool.url,
      };
    }

    this.logger.info('Finished collation of explore tools');
  }

  private async fetchTools() {
    const baseUrl = await this.discovery.getBaseUrl('explore');

    const { token } = await this.auth.getPluginRequestToken({
      onBehalfOf: await this.auth.getOwnServiceCredentials(),
      targetPluginId: 'explore',
    });
    const response = await fetch(`${baseUrl}/tools`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to explore fetch tools, ${response.status}: ${response.statusText}`,
      );
    }

    const data = await response.json();
    return data.tools;
  }
}