## API Report File for "@kozmoai/plugin-apollo-explorer"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
/// <reference types="react" />

import { GlintPlugin } from '@kozmoai/core-plugin-api';
import { JSONObject } from '@apollo/explorer/src/helpers/types';
import { JSX as JSX_2 } from 'react';
import { RouteRef } from '@kozmoai/core-plugin-api';

// @public
export const ApolloExplorerPage: (props: {
  title?: string | undefined;
  subtitle?: string | undefined;
  endpoints: {
    title: string;
    graphRef: string;
    persistExplorerState?: boolean | undefined;
    initialState?:
      | {
          document?: string | undefined;
          variables?: JSONObject | undefined;
          headers?: Record<string, string> | undefined;
          displayOptions: {
            docsPanelState?: 'closed' | 'open' | undefined;
            showHeadersAndEnvVars?: boolean | undefined;
            theme?: 'dark' | 'light' | undefined;
          };
        }
      | undefined;
  }[];
}) => JSX_2.Element;

// @public
export const apolloExplorerPlugin: GlintPlugin<
  {
    root: RouteRef<undefined>;
  },
  {}
>;
```