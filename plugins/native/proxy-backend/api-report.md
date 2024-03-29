## API Report File for "@kozmoai/plugin-proxy-backend"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
import { Config } from '@kozmoai/config';
import express from 'express';
import { Logger } from 'winston';
import { PluginEndpointDiscovery } from '@kozmoai/backend-common';

// @public
export function createRouter(options: RouterOptions): Promise<express.Router>;

// @public (undocumented)
export interface RouterOptions {
  // (undocumented)
  config: Config;
  // (undocumented)
  discovery: PluginEndpointDiscovery;
  // (undocumented)
  logger: Logger;
  // (undocumented)
  reviveConsumedRequestBodies?: boolean;
  // (undocumented)
  skipInvalidProxies?: boolean;
}
```