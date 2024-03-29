## API Report File for "@kozmoai/plugin-auth-backend-module-atlassian-provider"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
import { BackendFeature } from '@kozmoai/backend-plugin-api';
import { OAuthAuthenticator } from '@kozmoai/plugin-auth-node';
import { OAuthAuthenticatorResult } from '@kozmoai/plugin-auth-node';
import { PassportOAuthAuthenticatorHelper } from '@kozmoai/plugin-auth-node';
import { PassportProfile } from '@kozmoai/plugin-auth-node';
import { SignInResolverFactory } from '@kozmoai/plugin-auth-node';

// @public (undocumented)
export const atlassianAuthenticator: OAuthAuthenticator<
  PassportOAuthAuthenticatorHelper,
  PassportProfile
>;

// @public
export namespace atlassianSignInResolvers {
  const usernameMatchingUserEntityName: SignInResolverFactory<
    OAuthAuthenticatorResult<PassportProfile>,
    unknown
  >;
}

// @public (undocumented)
const authModuleAtlassianProvider: () => BackendFeature;
export default authModuleAtlassianProvider;
```