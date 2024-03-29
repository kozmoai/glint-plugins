## API Report File for "@kozmoai/plugin-catalog-backend-module-github-org"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
import { BackendFeature } from '@kozmoai/backend-plugin-api';
import { ExtensionPoint } from '@kozmoai/backend-plugin-api';
import { GithubMultiOrgEntityProvider } from '@kozmoai/plugin-catalog-backend-module-github';
import { TeamTransformer } from '@kozmoai/plugin-catalog-backend-module-github';
import { UserTransformer } from '@kozmoai/plugin-catalog-backend-module-github';

// @public
const catalogModuleGithubOrgEntityProvider: () => BackendFeature;
export default catalogModuleGithubOrgEntityProvider;

export { GithubMultiOrgEntityProvider };

// @public
export interface GithubOrgEntityProviderTransformsExtensionPoint {
  setTeamTransformer(transformer: TeamTransformer): void;
  setUserTransformer(transformer: UserTransformer): void;
}

// @public
export const githubOrgEntityProviderTransformsExtensionPoint: ExtensionPoint<GithubOrgEntityProviderTransformsExtensionPoint>;

export { TeamTransformer };

export { UserTransformer };
```