## API Report File for "@kozmoai/plugin-lighthouse"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
/// <reference types="react" />

import { ApiRef } from '@kozmoai/core-plugin-api';
import { GlintPlugin } from '@kozmoai/core-plugin-api';
import { Entity } from '@kozmoai/catalog-model';
import { InfoCardVariants } from '@kozmoai/core-components';
import { JSX as JSX_2 } from 'react';
import { LighthouseApi } from '@kozmoai/plugin-lighthouse-common';
import { default as React_2 } from 'react';
import { RouteRef } from '@kozmoai/core-plugin-api';

// @public (undocumented)
export const EmbeddedRouter: () => React_2.JSX.Element;

// @public (undocumented)
export const EntityLastLighthouseAuditCard: (props: {
  dense?: boolean | undefined;
  variant?: InfoCardVariants | undefined;
}) => JSX_2.Element;

// @public (undocumented)
export const EntityLighthouseContent: () => JSX_2.Element;

// @public (undocumented)
const isLighthouseAvailable: (entity: Entity) => boolean;
export { isLighthouseAvailable };
export { isLighthouseAvailable as isPluginApplicableToEntity };

// @public (undocumented)
export const LastLighthouseAuditCard: (props: {
  dense?: boolean;
  variant?: InfoCardVariants;
}) => React_2.JSX.Element;

// @public (undocumented)
export const lighthouseApiRef: ApiRef<LighthouseApi>;

// @public (undocumented)
export const LighthousePage: () => JSX_2.Element;

// @public (undocumented)
const lighthousePlugin: GlintPlugin<
  {
    root: RouteRef<undefined>;
    entityContent: RouteRef<undefined>;
  },
  {}
>;
export { lighthousePlugin };
export { lighthousePlugin as plugin };

// @public (undocumented)
export const Router: () => React_2.JSX.Element;
```