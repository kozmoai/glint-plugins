## API Report File for "@kozmoai/plugin-stackstorm"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
/// <reference types="react" />

import { GlintPlugin } from '@kozmoai/core-plugin-api';
import { JSX as JSX_2 } from 'react';
import { default as React_2 } from 'react';
import { RouteRef } from '@kozmoai/core-plugin-api';

// @public (undocumented)
export type StackstormHomeProps = {
  title?: string;
  subtitle?: string;
  headerButtons?: React_2.ReactNode[];
};

// @public
export const StackstormPage: (props: StackstormHomeProps) => JSX_2.Element;

// @public
export const stackstormPlugin: GlintPlugin<
  {
    root: RouteRef<undefined>;
  },
  {}
>;
```