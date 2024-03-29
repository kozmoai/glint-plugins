## API Report File for "@kozmoai/plugin-user-settings"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
import { GlintPlugin } from '@kozmoai/frontend-plugin-api';
import { ExtensionDefinition } from '@kozmoai/frontend-plugin-api';
import { RouteRef } from '@kozmoai/frontend-plugin-api';
import { TranslationRef } from '@kozmoai/core-plugin-api/alpha';

// @alpha (undocumented)
const _default: GlintPlugin<
  {
    root: RouteRef<undefined>;
  },
  {}
>;
export default _default;

// @alpha (undocumented)
export const settingsNavItem: ExtensionDefinition<{
  title: string;
}>;

// @alpha (undocumented)
export const userSettingsTranslationRef: TranslationRef<
  'user-settings',
  {
    readonly 'languageToggle.select': 'Select language {{language}}';
    readonly 'languageToggle.title': 'Language';
    readonly 'languageToggle.description': 'Change the language';
    readonly 'themeToggle.select': 'Select theme {{theme}}';
    readonly 'themeToggle.title': 'Theme';
    readonly 'themeToggle.description': 'Change the theme mode';
    readonly 'themeToggle.names.auto': 'Auto';
    readonly 'themeToggle.names.dark': 'Dark';
    readonly 'themeToggle.names.light': 'Light';
    readonly 'themeToggle.selectAuto': 'Select Auto Theme';
  }
>;

// (No @packageDocumentation comment for this package)
```