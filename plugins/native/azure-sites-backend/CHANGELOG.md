# @kozmoai/plugin-azure-sites-backend

## 0.3.0-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/config@1.2.0-next.1
  - @kozmoai/backend-common@0.21.4-next.1
  - @kozmoai/backend-plugin-api@0.6.14-next.1
  - @kozmoai/plugin-auth-node@0.4.9-next.1
  - @kozmoai/plugin-permission-common@0.7.13-next.1
  - @kozmoai/plugin-permission-node@0.7.25-next.1
  - @kozmoai/catalog-client@1.6.1-next.0
  - @kozmoai/catalog-model@1.4.5-next.0
  - @kozmoai/errors@1.2.4-next.0
  - @kozmoai/plugin-azure-sites-common@0.1.3-next.1
  - @kozmoai/plugin-catalog-node@1.8.0-next.1

## 0.3.0-next.0

### Minor Changes

- 6b802a2: **BREAKING**: The `createRouter` method now requires the `discovery` service to be forwarded from the plugin environment. This is part of the migration to support new auth services.

### Patch Changes

- 85db926: Added new backend system for the Azure Sites backend plugin
- Updated dependencies
  - @kozmoai/backend-common@0.21.3-next.0
  - @kozmoai/plugin-auth-node@0.4.8-next.0
  - @kozmoai/errors@1.2.4-next.0
  - @kozmoai/backend-plugin-api@0.6.13-next.0
  - @kozmoai/plugin-permission-common@0.7.13-next.0
  - @kozmoai/plugin-catalog-node@1.8.0-next.0
  - @kozmoai/plugin-permission-node@0.7.24-next.0
  - @kozmoai/catalog-client@1.6.1-next.0
  - @kozmoai/catalog-model@1.4.5-next.0
  - @kozmoai/config@1.1.2-next.0
  - @kozmoai/plugin-azure-sites-common@0.1.3-next.0

## 0.2.0

### Minor Changes

- 28610f4: **BREAKING**: `catalogApi` and `permissionsApi` are now a requirement to be passed through to the `createRouter` function.

  You can fix the typescript issues by passing through the required dependencies like the below `diff` shows:

  ```diff
    import {
      createRouter,
      AzureSitesApi,
    } from '@kozmoai/plugin-azure-sites-backend';
    import { Router } from 'express';
    import { PluginEnvironment } from '../types';

    export default async function createPlugin(
      env: PluginEnvironment,
    ): Promise<Router> {
  +   const catalogClient = new CatalogClient({
  +     discoveryApi: env.discovery,
  +   });

      return await createRouter({
        logger: env.logger,
        azureSitesApi: AzureSitesApi.fromConfig(env.config),
  +     catalogApi: catalogClient,
  +     permissionsApi: env.permissions,
      });
    }
  ```

### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 4376655: Added `permissionIntegrationRouter` for azure-sites-backend routes
- 5a409bb: Azure Sites `start` and `stop` action is now protected with the Permissions framework.

  The below example describes an action that forbids anyone but the owner of the catalog entity to trigger actions towards a site tied to an entity.

  ```typescript
     // packages/backend/src/plugins/permission.ts
    import { azureSitesActionPermission } from '@kozmoai/plugin-azure-sites-common';
     ...
     class TestPermissionPolicy implements PermissionPolicy {
    async handle(request: PolicyQuery, user?: GlintIdentityResponse): Promise<PolicyDecision> {
       if (isPermission(request.permission, azureSitesActionPermission)) {
         return createCatalogConditionalDecision(
           request.permission,
           catalogConditions.isEntityOwner({
             claims: user?.identity.ownershipEntityRefs ??  [],
           }),
         );
       }
       ...
       return {
         result: AuthorizeResult.ALLOW,
       };
     }
     ...
     }
  ```

- Updated dependencies
  - @kozmoai/backend-common@0.21.0
  - @kozmoai/plugin-auth-node@0.4.4
  - @kozmoai/catalog-model@1.4.4
  - @kozmoai/catalog-client@1.6.0
  - @kozmoai/plugin-azure-sites-common@0.1.2
  - @kozmoai/plugin-permission-node@0.7.21
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/plugin-permission-common@0.7.12

## 0.2.0-next.3

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.21.0-next.3
  - @kozmoai/plugin-auth-node@0.4.4-next.3
  - @kozmoai/plugin-permission-node@0.7.21-next.3
  - @kozmoai/catalog-client@1.6.0-next.1
  - @kozmoai/catalog-model@1.4.4-next.0
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/plugin-azure-sites-common@0.1.2-next.0
  - @kozmoai/plugin-permission-common@0.7.12

## 0.2.0-next.2

### Patch Changes

- 9aac2b0: Use `--cwd` as the first `yarn` argument
- 4376655: Added `permissionIntegrationRouter` for azure-sites-backend routes
- Updated dependencies
  - @kozmoai/backend-common@0.21.0-next.2
  - @kozmoai/plugin-auth-node@0.4.4-next.2
  - @kozmoai/plugin-permission-node@0.7.21-next.2
  - @kozmoai/config@1.1.1
  - @kozmoai/catalog-client@1.6.0-next.1
  - @kozmoai/catalog-model@1.4.4-next.0
  - @kozmoai/errors@1.2.3
  - @kozmoai/plugin-azure-sites-common@0.1.2-next.0
  - @kozmoai/plugin-permission-common@0.7.12

## 0.2.0-next.1

### Minor Changes

- 28610f4: **BREAKING**: `catalogApi` and `permissionsApi` are now a requirement to be passed through to the `createRouter` function.

  You can fix the typescript issues by passing through the required dependencies like the below `diff` shows:

  ```diff
    import {
      createRouter,
      AzureSitesApi,
    } from '@kozmoai/plugin-azure-sites-backend';
    import { Router } from 'express';
    import { PluginEnvironment } from '../types';

    export default async function createPlugin(
      env: PluginEnvironment,
    ): Promise<Router> {
  +   const catalogClient = new CatalogClient({
  +     discoveryApi: env.discovery,
  +   });

      return await createRouter({
        logger: env.logger,
        azureSitesApi: AzureSitesApi.fromConfig(env.config),
  +     catalogApi: catalogClient,
  +     permissionsApi: env.permissions,
      });
    }
  ```

### Patch Changes

- 5a409bb: Azure Sites `start` and `stop` action is now protected with the Permissions framework.

  The below example describes an action that forbids anyone but the owner of the catalog entity to trigger actions towards a site tied to an entity.

  ```typescript
     // packages/backend/src/plugins/permission.ts
    import { azureSitesActionPermission } from '@kozmoai/plugin-azure-sites-common';
     ...
     class TestPermissionPolicy implements PermissionPolicy {
    async handle(request: PolicyQuery, user?: GlintIdentityResponse): Promise<PolicyDecision> {
       if (isPermission(request.permission, azureSitesActionPermission)) {
         return createCatalogConditionalDecision(
           request.permission,
           catalogConditions.isEntityOwner({
             claims: user?.identity.ownershipEntityRefs ??  [],
           }),
         );
       }
       ...
       return {
         result: AuthorizeResult.ALLOW,
       };
     }
     ...
     }
  ```

- Updated dependencies
  - @kozmoai/catalog-model@1.4.4-next.0
  - @kozmoai/catalog-client@1.6.0-next.1
  - @kozmoai/backend-common@0.21.0-next.1
  - @kozmoai/plugin-azure-sites-common@0.1.2-next.0
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/plugin-auth-node@0.4.4-next.1
  - @kozmoai/plugin-permission-common@0.7.12
  - @kozmoai/plugin-permission-node@0.7.21-next.1

## 0.1.20-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.21.0-next.0
  - @kozmoai/config@1.1.1
  - @kozmoai/plugin-azure-sites-common@0.1.1

## 0.1.19

### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @kozmoai/backend-common@0.20.1
  - @kozmoai/config@1.1.1
  - @kozmoai/plugin-azure-sites-common@0.1.1

## 0.1.19-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.20.1-next.2

## 0.1.19-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.20.1-next.1
  - @kozmoai/config@1.1.1
  - @kozmoai/plugin-azure-sites-common@0.1.1

## 0.1.19-next.0

### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @kozmoai/backend-common@0.20.1-next.0
  - @kozmoai/config@1.1.1
  - @kozmoai/plugin-azure-sites-common@0.1.1

## 0.1.18

### Patch Changes

- 99fb541: Updated dependency `@azure/identity` to `^4.0.0`.
- b7a13ed: Updated dependency `@azure/arm-appservice` to `^14.0.0`.
- Updated dependencies
  - @kozmoai/backend-common@0.20.0
  - @kozmoai/config@1.1.1
  - @kozmoai/plugin-azure-sites-common@0.1.1

## 0.1.18-next.3

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.20.0-next.3
  - @kozmoai/config@1.1.1
  - @kozmoai/plugin-azure-sites-common@0.1.1

## 0.1.18-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.20.0-next.2
  - @kozmoai/config@1.1.1
  - @kozmoai/plugin-azure-sites-common@0.1.1

## 0.1.18-next.1

### Patch Changes

- 99fb54183b: Updated dependency `@azure/identity` to `^4.0.0`.
- Updated dependencies
  - @kozmoai/backend-common@0.20.0-next.1
  - @kozmoai/config@1.1.1
  - @kozmoai/plugin-azure-sites-common@0.1.1

## 0.1.18-next.0

### Patch Changes

- b7a13edf6d: Updated dependency `@azure/arm-appservice` to `^14.0.0`.
- Updated dependencies
  - @kozmoai/backend-common@0.20.0-next.0
  - @kozmoai/config@1.1.1
  - @kozmoai/plugin-azure-sites-common@0.1.1

## 0.1.17

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.19.9
  - @kozmoai/config@1.1.1
  - @kozmoai/plugin-azure-sites-common@0.1.1

## 0.1.17-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.19.9-next.2

## 0.1.17-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.19.9-next.1
  - @kozmoai/config@1.1.1
  - @kozmoai/plugin-azure-sites-common@0.1.1

## 0.1.17-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.19.9-next.0
  - @kozmoai/config@1.1.1
  - @kozmoai/plugin-azure-sites-common@0.1.1

## 0.1.16

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.19.8
  - @kozmoai/config@1.1.1
  - @kozmoai/plugin-azure-sites-common@0.1.1

## 0.1.16-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.19.8-next.2
  - @kozmoai/config@1.1.1-next.0
  - @kozmoai/plugin-azure-sites-common@0.1.1

## 0.1.15-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.19.7-next.1
  - @kozmoai/config@1.1.0
  - @kozmoai/plugin-azure-sites-common@0.1.1

## 0.1.15-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.19.7-next.0
  - @kozmoai/config@1.1.0
  - @kozmoai/plugin-azure-sites-common@0.1.1

## 0.1.13

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.19.5
  - @kozmoai/config@1.1.0
  - @kozmoai/plugin-azure-sites-common@0.1.1

## 0.1.13-next.3

### Patch Changes

- Updated dependencies
  - @kozmoai/config@1.1.0-next.2
  - @kozmoai/plugin-azure-sites-common@0.1.1-next.0
  - @kozmoai/backend-common@0.19.5-next.3

## 0.1.13-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/config@1.1.0-next.1
  - @kozmoai/backend-common@0.19.5-next.2
  - @kozmoai/plugin-azure-sites-common@0.1.0

## 0.1.13-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/config@1.1.0-next.0
  - @kozmoai/backend-common@0.19.5-next.1
  - @kozmoai/plugin-azure-sites-common@0.1.0

## 0.1.12-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.19.4-next.0
  - @kozmoai/config@1.0.8
  - @kozmoai/plugin-azure-sites-common@0.1.0

## 0.1.10

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.19.2
  - @kozmoai/config@1.0.8
  - @kozmoai/plugin-azure-sites-common@0.1.0

## 0.1.10-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.19.2-next.2

## 0.1.10-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.19.2-next.1
  - @kozmoai/config@1.0.8
  - @kozmoai/plugin-azure-sites-common@0.1.0

## 0.1.10-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.19.2-next.0
  - @kozmoai/config@1.0.8
  - @kozmoai/plugin-azure-sites-common@0.1.0

## 0.1.9

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.19.1
  - @kozmoai/config@1.0.8
  - @kozmoai/plugin-azure-sites-common@0.1.0

## 0.1.9-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.19.1-next.0
  - @kozmoai/config@1.0.8
  - @kozmoai/plugin-azure-sites-common@0.1.0

## 0.1.8

### Patch Changes

- b43e030911f2: Upgrade `@azure/identity` to support using Workload Identity to authenticate against Azure.
- Updated dependencies
  - @kozmoai/backend-common@0.19.0
  - @kozmoai/config@1.0.8
  - @kozmoai/plugin-azure-sites-common@0.1.0

## 0.1.8-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.19.0-next.2
  - @kozmoai/config@1.0.7
  - @kozmoai/plugin-azure-sites-common@0.1.0

## 0.1.8-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.19.0-next.1
  - @kozmoai/config@1.0.7
  - @kozmoai/plugin-azure-sites-common@0.1.0

## 0.1.8-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.18.6-next.0
  - @kozmoai/config@1.0.7
  - @kozmoai/plugin-azure-sites-common@0.1.0

## 0.1.7

### Patch Changes

- d66d4f916aa: Updated URL to `/health` and corrected typos in the `README.md`
- Updated dependencies
  - @kozmoai/backend-common@0.18.5
  - @kozmoai/config@1.0.7
  - @kozmoai/plugin-azure-sites-common@0.1.0

## 0.1.7-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.18.5-next.1
  - @kozmoai/config@1.0.7

## 0.1.7-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.18.5-next.0
  - @kozmoai/config@1.0.7
  - @kozmoai/plugin-azure-sites-common@0.1.0

## 0.1.6

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.18.4
  - @kozmoai/config@1.0.7
  - @kozmoai/plugin-azure-sites-common@0.1.0

## 0.1.6-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.18.4-next.2
  - @kozmoai/config@1.0.7
  - @kozmoai/plugin-azure-sites-common@0.1.0

## 0.1.6-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.18.4-next.1
  - @kozmoai/config@1.0.7
  - @kozmoai/plugin-azure-sites-common@0.1.0

## 0.1.6-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.18.4-next.0
  - @kozmoai/config@1.0.7
  - @kozmoai/plugin-azure-sites-common@0.1.0

## 0.1.5

### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.
- Updated dependencies
  - @kozmoai/backend-common@0.18.3
  - @kozmoai/config@1.0.7
  - @kozmoai/plugin-azure-sites-common@0.1.0

## 0.1.5-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.18.3-next.2
  - @kozmoai/config@1.0.7-next.0

## 0.1.5-next.1

### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.
- Updated dependencies
  - @kozmoai/backend-common@0.18.3-next.1
  - @kozmoai/config@1.0.7-next.0
  - @kozmoai/plugin-azure-sites-common@0.1.0

## 0.1.5-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.18.3-next.0
  - @kozmoai/config@1.0.6
  - @kozmoai/plugin-azure-sites-common@0.1.0

## 0.1.4

### Patch Changes

- c51efce2a0: Update docs to always use `yarn add --cwd` for app & backend
- Updated dependencies
  - @kozmoai/backend-common@0.18.2
  - @kozmoai/config@1.0.6
  - @kozmoai/plugin-azure-sites-common@0.1.0

## 0.1.4-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.18.2-next.2
  - @kozmoai/config@1.0.6
  - @kozmoai/plugin-azure-sites-common@0.1.0

## 0.1.4-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.18.2-next.1
  - @kozmoai/config@1.0.6
  - @kozmoai/plugin-azure-sites-common@0.1.0

## 0.1.4-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.18.2-next.0

## 0.1.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.18.0
  - @kozmoai/config@1.0.6
  - @kozmoai/plugin-azure-sites-common@0.1.0

## 0.1.2-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.18.0-next.1
  - @kozmoai/config@1.0.6-next.0
  - @kozmoai/plugin-azure-sites-common@0.1.0

## 0.1.2-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.18.0-next.0
  - @kozmoai/config@1.0.6-next.0
  - @kozmoai/plugin-azure-sites-common@0.1.0

## 0.1.1

### Patch Changes

- 3280711113: Updated dependency `msw` to `^0.49.0`.
- Updated dependencies
  - @kozmoai/backend-common@0.17.0
  - @kozmoai/config@1.0.5
  - @kozmoai/plugin-azure-sites-common@0.1.0

## 0.1.1-next.3

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.17.0-next.3
  - @kozmoai/config@1.0.5-next.1
  - @kozmoai/plugin-azure-sites-common@0.1.0

## 0.1.1-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.17.0-next.2
  - @kozmoai/config@1.0.5-next.1
  - @kozmoai/plugin-azure-sites-common@0.1.0

## 0.1.1-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.17.0-next.1
  - @kozmoai/config@1.0.5-next.1
  - @kozmoai/plugin-azure-sites-common@0.1.0

## 0.1.1-next.0

### Patch Changes

- 3280711113: Updated dependency `msw` to `^0.49.0`.
- Updated dependencies
  - @kozmoai/backend-common@0.16.1-next.0
  - @kozmoai/config@1.0.5-next.0
  - @kozmoai/plugin-azure-sites-common@0.1.0

## 0.1.0

### Minor Changes

- 4a75ce761c: Azure Sites (Apps & Functions) support for a given entity. View the current status of the site, quickly jump to site's Overview page, or Log Stream page.

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.16.0
  - @kozmoai/plugin-azure-sites-common@0.1.0
  - @kozmoai/config@1.0.4

## 0.1.0-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.16.0-next.1
  - @kozmoai/config@1.0.4-next.0
  - @kozmoai/plugin-azure-sites-common@0.1.0-next.0

## 0.1.0-next.0

### Minor Changes

- 4a75ce761c: Azure Sites (Apps & Functions) support for a given entity. View the current status of the site, quickly jump to site's Overview page, or Log Stream page.

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.16.0-next.0
  - @kozmoai/plugin-azure-sites-common@0.1.0-next.0
  - @kozmoai/config@1.0.4-next.0