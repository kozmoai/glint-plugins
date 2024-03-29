## API Report File for "@kozmoai/plugin-lighthouse-backend"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
import { AuthService } from '@kozmoai/backend-plugin-api';
import { BackendFeature } from '@kozmoai/backend-plugin-api';
import { CatalogApi } from '@kozmoai/catalog-client';
import { Config } from '@kozmoai/config';
import { DiscoveryService } from '@kozmoai/backend-plugin-api';
import { Logger } from 'winston';
import { PluginTaskScheduler } from '@kozmoai/backend-tasks';
import { TokenManager } from '@kozmoai/backend-common';

// @public (undocumented)
export interface CreateLighthouseSchedulerOptions {
  // (undocumented)
  auth?: AuthService;
  // (undocumented)
  catalogClient: CatalogApi;
  // (undocumented)
  config: Config;
  // (undocumented)
  discovery: DiscoveryService;
  // (undocumented)
  logger: Logger;
  // (undocumented)
  scheduler?: PluginTaskScheduler;
  // (undocumented)
  tokenManager: TokenManager;
}

// @public (undocumented)
export function createScheduler(
  options: CreateLighthouseSchedulerOptions,
): Promise<void>;

// @public
const lighthousePlugin: () => BackendFeature;
export default lighthousePlugin;

// (No @packageDocumentation comment for this package)
```