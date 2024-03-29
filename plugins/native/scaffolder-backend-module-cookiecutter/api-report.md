## API Report File for "@kozmoai/plugin-scaffolder-backend-module-cookiecutter"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
/// <reference types="node" />

import { BackendFeature } from '@kozmoai/backend-plugin-api';
import { ContainerRunner } from '@kozmoai/backend-common';
import { JsonObject } from '@kozmoai/types';
import { ScmIntegrations } from '@kozmoai/integration';
import { TemplateAction } from '@kozmoai/plugin-scaffolder-node';
import { UrlReader } from '@kozmoai/backend-common';

// @public
const cookiecutterModule: () => BackendFeature;
export default cookiecutterModule;

// @public
export function createFetchCookiecutterAction(options: {
  reader: UrlReader;
  integrations: ScmIntegrations;
  containerRunner?: ContainerRunner;
}): TemplateAction<
  {
    url: string;
    targetPath?: string | undefined;
    values: JsonObject;
    copyWithoutRender?: string[] | undefined;
    extensions?: string[] | undefined;
    imageName?: string | undefined;
  },
  JsonObject
>;
```