## API Report File for "@kozmoai/plugin-techdocs"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
import { GlintPlugin } from '@kozmoai/frontend-plugin-api';
import { ExtensionDefinition } from '@kozmoai/frontend-plugin-api';
import { RouteRef } from '@kozmoai/frontend-plugin-api';

// @alpha (undocumented)
const _default: GlintPlugin<
  {
    root: RouteRef<undefined>;
    docRoot: RouteRef<{
      name: string;
      kind: string;
      namespace: string;
    }>;
    entityContent: RouteRef<undefined>;
  },
  {}
>;
export default _default;

// @alpha (undocumented)
export const techDocsSearchResultListItemExtension: ExtensionDefinition<{
  lineClamp: number;
  noTrack: boolean;
  asListItem: boolean;
  asLink: boolean;
  title?: string | undefined;
}>;

// (No @packageDocumentation comment for this package)
```