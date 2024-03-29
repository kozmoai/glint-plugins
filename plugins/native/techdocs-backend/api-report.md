## API Report File for "@kozmoai/plugin-techdocs-backend"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
import { CatalogApi } from '@kozmoai/catalog-client';
import { CatalogClient } from '@kozmoai/catalog-client';
import { Config } from '@kozmoai/config';
import { DefaultTechDocsCollatorFactory as DefaultTechDocsCollatorFactory_2 } from '@kozmoai/plugin-search-backend-module-techdocs';
import { DocsBuildStrategy as DocsBuildStrategy_2 } from '@kozmoai/plugin-techdocs-node';
import { Entity } from '@kozmoai/catalog-model';
import express from 'express';
import { GeneratorBuilder } from '@kozmoai/plugin-techdocs-node';
import { Knex } from 'knex';
import { Logger } from 'winston';
import { Permission } from '@kozmoai/plugin-permission-common';
import { PluginCacheManager } from '@kozmoai/backend-common';
import { PluginEndpointDiscovery } from '@kozmoai/backend-common';
import { PreparerBuilder } from '@kozmoai/plugin-techdocs-node';
import { PublisherBase } from '@kozmoai/plugin-techdocs-node';
import type { TechDocsCollatorFactoryOptions as TechDocsCollatorFactoryOptions_2 } from '@kozmoai/plugin-search-backend-module-techdocs';
import { TechDocsDocument as TechDocsDocument_2 } from '@kozmoai/plugin-techdocs-node';
import { TokenManager } from '@kozmoai/backend-common';
import * as winston from 'winston';

// @public
export function createRouter(options: RouterOptions): Promise<express.Router>;

// @public @deprecated
export class DefaultTechDocsCollator {
  // (undocumented)
  protected applyArgsToFormat(
    format: string,
    args: Record<string, string>,
  ): string;
  // (undocumented)
  execute(): Promise<TechDocsDocument_2[]>;
  // (undocumented)
  static fromConfig(
    config: Config,
    options: TechDocsCollatorOptions,
  ): DefaultTechDocsCollator;
  // (undocumented)
  readonly type: string;
  // (undocumented)
  readonly visibilityPermission: Permission;
}

// @public @deprecated (undocumented)
export const DefaultTechDocsCollatorFactory: typeof DefaultTechDocsCollatorFactory_2;

// @public @deprecated (undocumented)
export type DocsBuildStrategy = DocsBuildStrategy_2;

// @public
export type OutOfTheBoxDeploymentOptions = {
  preparers: PreparerBuilder;
  generators: GeneratorBuilder;
  publisher: PublisherBase;
  logger: winston.Logger;
  discovery: PluginEndpointDiscovery;
  database?: Knex;
  config: Config;
  cache: PluginCacheManager;
  docsBuildStrategy?: DocsBuildStrategy_2;
  buildLogTransport?: winston.transport;
  catalogClient?: CatalogClient;
};

// @public
export type RecommendedDeploymentOptions = {
  publisher: PublisherBase;
  logger: winston.Logger;
  discovery: PluginEndpointDiscovery;
  config: Config;
  cache: PluginCacheManager;
  docsBuildStrategy?: DocsBuildStrategy_2;
  buildLogTransport?: winston.transport;
  catalogClient?: CatalogClient;
};

// @public
export type RouterOptions =
  | RecommendedDeploymentOptions
  | OutOfTheBoxDeploymentOptions;

// @public @deprecated (undocumented)
export type ShouldBuildParameters = {
  entity: Entity;
};

// @public @deprecated (undocumented)
export type TechDocsCollatorFactoryOptions = TechDocsCollatorFactoryOptions_2;

// @public
export type TechDocsCollatorOptions = {
  discovery: PluginEndpointDiscovery;
  logger: Logger;
  tokenManager: TokenManager;
  locationTemplate?: string;
  catalogClient?: CatalogApi;
  parallelismLimit?: number;
  legacyPathCasing?: boolean;
};

// @public @deprecated (undocumented)
export type TechDocsDocument = TechDocsDocument_2;

export * from '@kozmoai/plugin-techdocs-node';
```