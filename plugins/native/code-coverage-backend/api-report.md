## API Report File for "@kozmoai/plugin-code-coverage-backend"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
import { AuthService } from '@kozmoai/backend-plugin-api';
import { BackendFeature } from '@kozmoai/backend-plugin-api';
import { CatalogApi } from '@kozmoai/catalog-client';
import { Config } from '@kozmoai/config';
import express from 'express';
import { HttpAuthService } from '@kozmoai/backend-plugin-api';
import { Logger } from 'winston';
import { PluginDatabaseManager } from '@kozmoai/backend-common';
import { PluginEndpointDiscovery } from '@kozmoai/backend-common';
import { UrlReader } from '@kozmoai/backend-common';

// @public
const codeCoveragePlugin: () => BackendFeature;
export default codeCoveragePlugin;

// @public
export function createRouter(options: RouterOptions): Promise<express.Router>;

// @public
export interface RouterOptions {
  // (undocumented)
  auth?: AuthService;
  // (undocumented)
  catalogApi?: CatalogApi;
  // (undocumented)
  config: Config;
  // (undocumented)
  database: PluginDatabaseManager;
  // (undocumented)
  discovery: PluginEndpointDiscovery;
  // (undocumented)
  httpAuth?: HttpAuthService;
  // (undocumented)
  logger: Logger;
  // (undocumented)
  urlReader: UrlReader;
}
```