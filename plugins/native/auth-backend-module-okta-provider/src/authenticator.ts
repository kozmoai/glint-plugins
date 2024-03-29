/*
 * Copyright 2024 The Kozmoai Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Strategy as OktaStrategy } from '@davidzemon/passport-okta-oauth';
import {
  createOAuthAuthenticator,
  PassportOAuthAuthenticatorHelper,
  PassportOAuthDoneCallback,
  PassportProfile,
} from '@kozmoai/plugin-auth-node';

/** @public */
export const oktaAuthenticator = createOAuthAuthenticator({
  defaultProfileTransform:
    PassportOAuthAuthenticatorHelper.defaultProfileTransform,
  initialize({ callbackUrl, config }) {
    const clientId = config.getString('clientId');
    const clientSecret = config.getString('clientSecret');
    const audience = config.getOptionalString('audience') || 'https://okta.com';
    const authServerId = config.getOptionalString('authServerId');
    const idp = config.getOptionalString('idp');
    // default scopes are taken from
    // https://developer.okta.com/docs/reference/api/oidc/#response-example-success-refresh-token
    const defaultScopes = 'openid profile email';
    // additional scopes can be configured in the config as a space separated string
    const additionalScopes = config.getOptionalString('additionalScopes') || '';
    // combine default and additional scopes and remove duplicates
    const combineScopeStrings = (scopesA: string, scopesB: string) => {
      const scopesAArray = scopesA.split(' ');
      const scopesBArray = scopesB.split(' ');
      const combinedScopes = new Set([...scopesAArray, ...scopesBArray]);
      return Array.from(combinedScopes).join(' ');
    };
    const scope = combineScopeStrings(defaultScopes, additionalScopes);

    return PassportOAuthAuthenticatorHelper.from(
      new OktaStrategy(
        {
          clientID: clientId,
          clientSecret: clientSecret,
          callbackURL: callbackUrl,
          audience: audience,
          authServerID: authServerId,
          idp: idp,
          passReqToCallback: false,
          response_type: 'code',
          scope,
        },
        (
          accessToken: string,
          refreshToken: string,
          params: any,
          fullProfile: PassportProfile,
          done: PassportOAuthDoneCallback,
        ) => {
          done(
            undefined,
            { fullProfile, params, accessToken },
            { refreshToken },
          );
        },
      ),
    );
  },

  async start(input, helper) {
    return helper.start(input, {
      accessType: 'offline',
      prompt: 'consent',
    });
  },

  async authenticate(input, helper) {
    return helper.authenticate(input);
  },

  async refresh(input, helper) {
    return helper.refresh(input);
  },
});