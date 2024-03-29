## API Report File for "@kozmoai/plugin-scaffolder-node-test-utils"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
import { ActionContext } from '@kozmoai/plugin-scaffolder-node';
import { JsonObject } from '@kozmoai/types';

// @public
export const createMockActionContext: <
  TActionInput extends JsonObject = JsonObject,
  TActionOutput extends JsonObject = JsonObject,
>(
  options?: Partial<ActionContext<TActionInput, TActionOutput>> | undefined,
) => ActionContext<TActionInput, TActionOutput>;

// (No @packageDocumentation comment for this package)
```