# @kozmoai/plugin-permission-backend

## 0.5.37-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/config@1.2.0-next.1
  - @kozmoai/backend-common@0.21.4-next.1
  - @kozmoai/backend-plugin-api@0.6.14-next.1
  - @kozmoai/plugin-auth-node@0.4.9-next.1
  - @kozmoai/plugin-permission-common@0.7.13-next.1
  - @kozmoai/plugin-permission-node@0.7.25-next.1
  - @kozmoai/errors@1.2.4-next.0

## 0.5.36-next.0

### Patch Changes

- 9802004: Migrated to use the new auth services introduced in [BEP-0003](https://github.com/kozmoai/glint/blob/master/beps/0003-auth-architecture-evolution/README.md).

  The `createRouter` function now accepts `auth`, `httpAuth` and `userInfo` options. Theses are used internally to support the new backend system, and can be ignored.

- Updated dependencies
  - @kozmoai/backend-common@0.21.3-next.0
  - @kozmoai/plugin-auth-node@0.4.8-next.0
  - @kozmoai/errors@1.2.4-next.0
  - @kozmoai/backend-plugin-api@0.6.13-next.0
  - @kozmoai/plugin-permission-common@0.7.13-next.0
  - @kozmoai/plugin-permission-node@0.7.24-next.0
  - @kozmoai/config@1.1.2-next.0

## 0.5.33

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.21.0
  - @kozmoai/plugin-auth-node@0.4.4
  - @kozmoai/backend-plugin-api@0.6.10
  - @kozmoai/plugin-permission-node@0.7.21
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/plugin-permission-common@0.7.12

## 0.5.33-next.3

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.21.0-next.3
  - @kozmoai/plugin-auth-node@0.4.4-next.3
  - @kozmoai/plugin-permission-node@0.7.21-next.3
  - @kozmoai/backend-plugin-api@0.6.10-next.3
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/plugin-permission-common@0.7.12

## 0.5.33-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.21.0-next.2
  - @kozmoai/backend-plugin-api@0.6.10-next.2
  - @kozmoai/plugin-auth-node@0.4.4-next.2
  - @kozmoai/plugin-permission-node@0.7.21-next.2
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/plugin-permission-common@0.7.12

## 0.5.33-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.6.10-next.1
  - @kozmoai/backend-common@0.21.0-next.1
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/plugin-auth-node@0.4.4-next.1
  - @kozmoai/plugin-permission-common@0.7.12
  - @kozmoai/plugin-permission-node@0.7.21-next.1

## 0.5.33-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.21.0-next.0
  - @kozmoai/plugin-auth-node@0.4.4-next.0
  - @kozmoai/plugin-permission-node@0.7.21-next.0
  - @kozmoai/backend-plugin-api@0.6.10-next.0
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/plugin-permission-common@0.7.12

## 0.5.32

### Patch Changes

- b1acd9b: Updated README
- Updated dependencies
  - @kozmoai/backend-common@0.20.1
  - @kozmoai/backend-plugin-api@0.6.9
  - @kozmoai/plugin-permission-common@0.7.12
  - @kozmoai/plugin-permission-node@0.7.20
  - @kozmoai/plugin-auth-node@0.4.3
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3

## 0.5.32-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.6.9-next.2
  - @kozmoai/backend-common@0.20.1-next.2
  - @kozmoai/plugin-auth-node@0.4.3-next.2
  - @kozmoai/plugin-permission-node@0.7.20-next.2

## 0.5.32-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.20.1-next.1
  - @kozmoai/config@1.1.1
  - @kozmoai/plugin-auth-node@0.4.3-next.1
  - @kozmoai/plugin-permission-node@0.7.20-next.1
  - @kozmoai/backend-plugin-api@0.6.9-next.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/plugin-permission-common@0.7.11

## 0.5.32-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.20.1-next.0
  - @kozmoai/backend-plugin-api@0.6.9-next.0
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/plugin-auth-node@0.4.3-next.0
  - @kozmoai/plugin-permission-common@0.7.11
  - @kozmoai/plugin-permission-node@0.7.20-next.0

## 0.5.31

### Patch Changes

- 0cbb03b: Fixing regular expression ReDoS with zod packages. Upgrading to latest. ref: https://security.snyk.io/vuln/SNYK-JS-ZOD-5925617
- Updated dependencies
  - @kozmoai/backend-common@0.20.0
  - @kozmoai/plugin-auth-node@0.4.2
  - @kozmoai/plugin-permission-common@0.7.11
  - @kozmoai/plugin-permission-node@0.7.19
  - @kozmoai/backend-plugin-api@0.6.8
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3

## 0.5.31-next.3

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.20.0-next.3
  - @kozmoai/backend-plugin-api@0.6.8-next.3
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/plugin-auth-node@0.4.2-next.3
  - @kozmoai/plugin-permission-common@0.7.10
  - @kozmoai/plugin-permission-node@0.7.19-next.3

## 0.5.31-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.20.0-next.2
  - @kozmoai/plugin-auth-node@0.4.2-next.2
  - @kozmoai/backend-plugin-api@0.6.8-next.2
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/plugin-permission-common@0.7.10
  - @kozmoai/plugin-permission-node@0.7.19-next.2

## 0.5.31-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.20.0-next.1
  - @kozmoai/backend-plugin-api@0.6.8-next.1
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/plugin-auth-node@0.4.2-next.1
  - @kozmoai/plugin-permission-common@0.7.10
  - @kozmoai/plugin-permission-node@0.7.19-next.1

## 0.5.31-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.20.0-next.0
  - @kozmoai/plugin-auth-node@0.4.2-next.0
  - @kozmoai/plugin-permission-node@0.7.19-next.0
  - @kozmoai/backend-plugin-api@0.6.8-next.0
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/plugin-permission-common@0.7.10

## 0.5.30

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.19.9
  - @kozmoai/backend-plugin-api@0.6.7
  - @kozmoai/plugin-permission-common@0.7.10
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/plugin-auth-node@0.4.1
  - @kozmoai/plugin-permission-node@0.7.18

## 0.5.30-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.6.7-next.2
  - @kozmoai/backend-common@0.19.9-next.2
  - @kozmoai/plugin-auth-node@0.4.1-next.2
  - @kozmoai/plugin-permission-node@0.7.18-next.2

## 0.5.30-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.19.9-next.1
  - @kozmoai/plugin-auth-node@0.4.1-next.1
  - @kozmoai/plugin-permission-node@0.7.18-next.1
  - @kozmoai/backend-plugin-api@0.6.7-next.1
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/plugin-permission-common@0.7.9

## 0.5.30-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.19.9-next.0
  - @kozmoai/backend-plugin-api@0.6.7-next.0
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/plugin-auth-node@0.4.1-next.0
  - @kozmoai/plugin-permission-common@0.7.9
  - @kozmoai/plugin-permission-node@0.7.18-next.0

## 0.5.29

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.19.8
  - @kozmoai/plugin-auth-node@0.4.0
  - @kozmoai/errors@1.2.3
  - @kozmoai/backend-plugin-api@0.6.6
  - @kozmoai/plugin-permission-node@0.7.17
  - @kozmoai/config@1.1.1
  - @kozmoai/plugin-permission-common@0.7.9

## 0.5.29-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.19.8-next.2
  - @kozmoai/plugin-auth-node@0.4.0-next.2
  - @kozmoai/errors@1.2.3-next.0
  - @kozmoai/plugin-permission-node@0.7.17-next.2
  - @kozmoai/backend-plugin-api@0.6.6-next.2
  - @kozmoai/config@1.1.1-next.0
  - @kozmoai/plugin-permission-common@0.7.9-next.0

## 0.5.28-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.19.7-next.1
  - @kozmoai/backend-plugin-api@0.6.5-next.1
  - @kozmoai/plugin-auth-node@0.3.2-next.1
  - @kozmoai/plugin-permission-node@0.7.16-next.1
  - @kozmoai/config@1.1.0
  - @kozmoai/errors@1.2.2
  - @kozmoai/plugin-permission-common@0.7.8

## 0.5.28-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-auth-node@0.3.2-next.0
  - @kozmoai/backend-common@0.19.7-next.0
  - @kozmoai/config@1.1.0
  - @kozmoai/backend-plugin-api@0.6.5-next.0
  - @kozmoai/errors@1.2.2
  - @kozmoai/plugin-permission-common@0.7.8
  - @kozmoai/plugin-permission-node@0.7.16-next.0

## 0.5.26

### Patch Changes

- 71114ac50e02: The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@kozmoai/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@kozmoai/plugin-example-backend'));
  ```

- a8a614ba0d07: Minor `package.json` update.
- 84ad6fccd4d5: Moved `permissionModuleAllowAllPolicy` to `@kozmoai/plugin-permission-backend-module-allow-all-policy`
- Updated dependencies
  - @kozmoai/backend-common@0.19.5
  - @kozmoai/plugin-auth-node@0.3.0
  - @kozmoai/config@1.1.0
  - @kozmoai/errors@1.2.2
  - @kozmoai/plugin-permission-common@0.7.8
  - @kozmoai/plugin-permission-node@0.7.14
  - @kozmoai/backend-plugin-api@0.6.3

## 0.5.26-next.3

### Patch Changes

- 71114ac50e02: The export for the new backend system has been moved to be the `default` export.

  For example, if you are currently importing the plugin using the following pattern:

  ```ts
  import { examplePlugin } from '@kozmoai/plugin-example-backend';

  backend.add(examplePlugin);
  ```

  It should be migrated to this:

  ```ts
  backend.add(import('@kozmoai/plugin-example-backend'));
  ```

- a8a614ba0d07: Minor `package.json` update.
- Updated dependencies
  - @kozmoai/config@1.1.0-next.2
  - @kozmoai/errors@1.2.2-next.0
  - @kozmoai/plugin-permission-common@0.7.8-next.2
  - @kozmoai/plugin-permission-node@0.7.14-next.3
  - @kozmoai/backend-plugin-api@0.6.3-next.3
  - @kozmoai/backend-common@0.19.5-next.3
  - @kozmoai/plugin-auth-node@0.3.0-next.3

## 0.5.26-next.2

### Patch Changes

- 84ad6fccd4d5: Moved `permissionModuleAllowAllPolicy` to `@kozmoai/plugin-permission-backend-module-allow-all-policy`
- Updated dependencies
  - @kozmoai/config@1.1.0-next.1
  - @kozmoai/backend-common@0.19.5-next.2
  - @kozmoai/plugin-auth-node@0.3.0-next.2
  - @kozmoai/plugin-permission-node@0.7.14-next.2
  - @kozmoai/backend-plugin-api@0.6.3-next.2
  - @kozmoai/plugin-permission-common@0.7.8-next.1
  - @kozmoai/errors@1.2.1

## 0.5.26-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/config@1.1.0-next.0
  - @kozmoai/backend-common@0.19.5-next.1
  - @kozmoai/backend-plugin-api@0.6.3-next.1
  - @kozmoai/plugin-auth-node@0.3.0-next.1
  - @kozmoai/plugin-permission-common@0.7.8-next.0
  - @kozmoai/plugin-permission-node@0.7.14-next.1
  - @kozmoai/errors@1.2.1

## 0.5.25-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-auth-node@0.3.0-next.0
  - @kozmoai/backend-common@0.19.4-next.0
  - @kozmoai/backend-plugin-api@0.6.2-next.0
  - @kozmoai/config@1.0.8
  - @kozmoai/errors@1.2.1
  - @kozmoai/plugin-permission-common@0.7.7
  - @kozmoai/plugin-permission-node@0.7.13-next.0

## 0.5.23

### Patch Changes

- 629cbd194a87: Use `coreServices.rootConfig` instead of `coreService.config`
- 12a8c94eda8d: Add package repository and homepage metadata
- 0d6ddc62d8da: Refactor backend plugin creation parameter from callback to object.
- Updated dependencies
  - @kozmoai/backend-common@0.19.2
  - @kozmoai/backend-plugin-api@0.6.0
  - @kozmoai/plugin-auth-node@0.2.17
  - @kozmoai/plugin-permission-node@0.7.11
  - @kozmoai/config@1.0.8
  - @kozmoai/errors@1.2.1
  - @kozmoai/plugin-permission-common@0.7.7

## 0.5.23-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.6.0-next.2
  - @kozmoai/backend-common@0.19.2-next.2
  - @kozmoai/plugin-permission-node@0.7.11-next.2
  - @kozmoai/plugin-auth-node@0.2.17-next.2

## 0.5.23-next.1

### Patch Changes

- 629cbd194a87: Use `coreServices.rootConfig` instead of `coreService.config`
- 12a8c94eda8d: Add package repository and homepage metadata
- Updated dependencies
  - @kozmoai/backend-common@0.19.2-next.1
  - @kozmoai/plugin-auth-node@0.2.17-next.1
  - @kozmoai/backend-plugin-api@0.6.0-next.1
  - @kozmoai/plugin-permission-node@0.7.11-next.1
  - @kozmoai/config@1.0.8
  - @kozmoai/errors@1.2.1
  - @kozmoai/plugin-permission-common@0.7.7

## 0.5.23-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.19.2-next.0
  - @kozmoai/backend-plugin-api@0.5.5-next.0
  - @kozmoai/config@1.0.8
  - @kozmoai/errors@1.2.1
  - @kozmoai/plugin-auth-node@0.2.17-next.0
  - @kozmoai/plugin-permission-common@0.7.7
  - @kozmoai/plugin-permission-node@0.7.11-next.0

## 0.5.22

### Patch Changes

- Updated dependencies
  - @kozmoai/errors@1.2.1
  - @kozmoai/backend-common@0.19.1
  - @kozmoai/backend-plugin-api@0.5.4
  - @kozmoai/config@1.0.8
  - @kozmoai/plugin-auth-node@0.2.16
  - @kozmoai/plugin-permission-common@0.7.7
  - @kozmoai/plugin-permission-node@0.7.10

## 0.5.22-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/errors@1.2.1-next.0
  - @kozmoai/backend-common@0.19.1-next.0
  - @kozmoai/backend-plugin-api@0.5.4-next.0
  - @kozmoai/config@1.0.8
  - @kozmoai/plugin-auth-node@0.2.16-next.0
  - @kozmoai/plugin-permission-common@0.7.7-next.0
  - @kozmoai/plugin-permission-node@0.7.10-next.0

## 0.5.21

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.19.0
  - @kozmoai/errors@1.2.0
  - @kozmoai/backend-plugin-api@0.5.3
  - @kozmoai/plugin-auth-node@0.2.15
  - @kozmoai/plugin-permission-node@0.7.9
  - @kozmoai/config@1.0.8
  - @kozmoai/plugin-permission-common@0.7.6

## 0.5.21-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.19.0-next.2
  - @kozmoai/backend-plugin-api@0.5.3-next.2
  - @kozmoai/config@1.0.7
  - @kozmoai/errors@1.2.0-next.0
  - @kozmoai/plugin-auth-node@0.2.15-next.2
  - @kozmoai/plugin-permission-common@0.7.6-next.0
  - @kozmoai/plugin-permission-node@0.7.9-next.2

## 0.5.21-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.19.0-next.1
  - @kozmoai/errors@1.2.0-next.0
  - @kozmoai/backend-plugin-api@0.5.3-next.1
  - @kozmoai/plugin-auth-node@0.2.15-next.1
  - @kozmoai/plugin-permission-node@0.7.9-next.1
  - @kozmoai/plugin-permission-common@0.7.6-next.0
  - @kozmoai/config@1.0.7

## 0.5.21-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.18.6-next.0
  - @kozmoai/config@1.0.7
  - @kozmoai/backend-plugin-api@0.5.3-next.0
  - @kozmoai/errors@1.1.5
  - @kozmoai/plugin-auth-node@0.2.15-next.0
  - @kozmoai/plugin-permission-common@0.7.5
  - @kozmoai/plugin-permission-node@0.7.9-next.0

## 0.5.20

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.18.5
  - @kozmoai/plugin-permission-node@0.7.8
  - @kozmoai/plugin-auth-node@0.2.14
  - @kozmoai/backend-plugin-api@0.5.2
  - @kozmoai/config@1.0.7
  - @kozmoai/errors@1.1.5
  - @kozmoai/plugin-permission-common@0.7.5

## 0.5.20-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.18.5-next.1
  - @kozmoai/plugin-auth-node@0.2.14-next.1
  - @kozmoai/plugin-permission-node@0.7.8-next.1
  - @kozmoai/backend-plugin-api@0.5.2-next.1
  - @kozmoai/config@1.0.7

## 0.5.20-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.18.5-next.0
  - @kozmoai/plugin-permission-node@0.7.8-next.0
  - @kozmoai/plugin-auth-node@0.2.14-next.0
  - @kozmoai/backend-plugin-api@0.5.2-next.0
  - @kozmoai/config@1.0.7
  - @kozmoai/errors@1.1.5
  - @kozmoai/plugin-permission-common@0.7.5

## 0.5.19

### Patch Changes

- 84946a580c4: Introduced alpha export of the `permissionPlugin` for use in the new backend system, along with a `permissionModuleAllowAllPolicy` that can be used to allow all requests.
- 1e4f5e91b8e: Bump `zod` and `zod-to-json-schema` dependencies.
- Updated dependencies
  - @kozmoai/backend-common@0.18.4
  - @kozmoai/plugin-permission-node@0.7.7
  - @kozmoai/plugin-permission-common@0.7.5
  - @kozmoai/plugin-auth-node@0.2.13
  - @kozmoai/backend-plugin-api@0.5.1
  - @kozmoai/config@1.0.7
  - @kozmoai/errors@1.1.5

## 0.5.19-next.2

### Patch Changes

- 84946a580c4: Introduced alpha export of the `permissionPlugin` for use in the new backend system, along with a `permissionModuleAllowAllPolicy` that can be used to allow all requests.
- Updated dependencies
  - @kozmoai/backend-common@0.18.4-next.2
  - @kozmoai/plugin-permission-node@0.7.7-next.2
  - @kozmoai/backend-plugin-api@0.5.1-next.2
  - @kozmoai/config@1.0.7
  - @kozmoai/errors@1.1.5
  - @kozmoai/plugin-auth-node@0.2.13-next.2
  - @kozmoai/plugin-permission-common@0.7.5-next.0

## 0.5.19-next.1

### Patch Changes

- 1e4f5e91b8e: Bump `zod` and `zod-to-json-schema` dependencies.
- Updated dependencies
  - @kozmoai/plugin-permission-node@0.7.7-next.1
  - @kozmoai/plugin-permission-common@0.7.5-next.0
  - @kozmoai/backend-common@0.18.4-next.1
  - @kozmoai/config@1.0.7
  - @kozmoai/errors@1.1.5
  - @kozmoai/plugin-auth-node@0.2.13-next.1

## 0.5.19-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.18.4-next.0
  - @kozmoai/config@1.0.7
  - @kozmoai/errors@1.1.5
  - @kozmoai/plugin-auth-node@0.2.13-next.0
  - @kozmoai/plugin-permission-common@0.7.4
  - @kozmoai/plugin-permission-node@0.7.7-next.0

## 0.5.18

### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.
- Updated dependencies
  - @kozmoai/plugin-permission-node@0.7.6
  - @kozmoai/plugin-auth-node@0.2.12
  - @kozmoai/backend-common@0.18.3
  - @kozmoai/errors@1.1.5
  - @kozmoai/plugin-permission-common@0.7.4
  - @kozmoai/config@1.0.7

## 0.5.18-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-auth-node@0.2.12-next.2
  - @kozmoai/backend-common@0.18.3-next.2
  - @kozmoai/plugin-permission-node@0.7.6-next.2
  - @kozmoai/config@1.0.7-next.0

## 0.5.18-next.1

### Patch Changes

- 52b0022dab7: Updated dependency `msw` to `^1.0.0`.
- Updated dependencies
  - @kozmoai/plugin-permission-node@0.7.6-next.1
  - @kozmoai/errors@1.1.5-next.0
  - @kozmoai/backend-common@0.18.3-next.1
  - @kozmoai/plugin-auth-node@0.2.12-next.1
  - @kozmoai/plugin-permission-common@0.7.4-next.0
  - @kozmoai/config@1.0.7-next.0

## 0.5.18-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.18.3-next.0
  - @kozmoai/config@1.0.6
  - @kozmoai/errors@1.1.4
  - @kozmoai/plugin-auth-node@0.2.12-next.0
  - @kozmoai/plugin-permission-common@0.7.3
  - @kozmoai/plugin-permission-node@0.7.6-next.0

## 0.5.17

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.18.2
  - @kozmoai/config@1.0.6
  - @kozmoai/errors@1.1.4
  - @kozmoai/plugin-auth-node@0.2.11
  - @kozmoai/plugin-permission-common@0.7.3
  - @kozmoai/plugin-permission-node@0.7.5

## 0.5.17-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.18.2-next.2
  - @kozmoai/plugin-auth-node@0.2.11-next.2
  - @kozmoai/plugin-permission-node@0.7.5-next.2
  - @kozmoai/config@1.0.6
  - @kozmoai/errors@1.1.4
  - @kozmoai/plugin-permission-common@0.7.3

## 0.5.17-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.18.2-next.1
  - @kozmoai/config@1.0.6
  - @kozmoai/errors@1.1.4
  - @kozmoai/plugin-auth-node@0.2.11-next.1
  - @kozmoai/plugin-permission-common@0.7.3
  - @kozmoai/plugin-permission-node@0.7.5-next.1

## 0.5.17-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.18.2-next.0
  - @kozmoai/plugin-auth-node@0.2.11-next.0
  - @kozmoai/plugin-permission-node@0.7.5-next.0

## 0.5.15

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.18.0
  - @kozmoai/config@1.0.6
  - @kozmoai/errors@1.1.4
  - @kozmoai/plugin-auth-node@0.2.9
  - @kozmoai/plugin-permission-common@0.7.3
  - @kozmoai/plugin-permission-node@0.7.3

## 0.5.15-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.18.0-next.1
  - @kozmoai/plugin-auth-node@0.2.9-next.1
  - @kozmoai/plugin-permission-node@0.7.3-next.1
  - @kozmoai/config@1.0.6-next.0
  - @kozmoai/errors@1.1.4
  - @kozmoai/plugin-permission-common@0.7.3-next.0

## 0.5.15-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.18.0-next.0
  - @kozmoai/config@1.0.6-next.0
  - @kozmoai/errors@1.1.4
  - @kozmoai/plugin-auth-node@0.2.9-next.0
  - @kozmoai/plugin-permission-common@0.7.3-next.0
  - @kozmoai/plugin-permission-node@0.7.3-next.0

## 0.5.14

### Patch Changes

- b05dcd5530: Move the `zod` dependency to a version that does not collide with other libraries
- 3280711113: Updated dependency `msw` to `^0.49.0`.
- Updated dependencies
  - @kozmoai/backend-common@0.17.0
  - @kozmoai/plugin-permission-common@0.7.2
  - @kozmoai/plugin-permission-node@0.7.2
  - @kozmoai/errors@1.1.4
  - @kozmoai/plugin-auth-node@0.2.8
  - @kozmoai/config@1.0.5

## 0.5.14-next.3

### Patch Changes

- b05dcd5530: Move the `zod` dependency to a version that does not collide with other libraries
- Updated dependencies
  - @kozmoai/plugin-permission-common@0.7.2-next.2
  - @kozmoai/plugin-permission-node@0.7.2-next.3
  - @kozmoai/backend-common@0.17.0-next.3
  - @kozmoai/config@1.0.5-next.1
  - @kozmoai/errors@1.1.4-next.1
  - @kozmoai/plugin-auth-node@0.2.8-next.3

## 0.5.14-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.17.0-next.2
  - @kozmoai/plugin-auth-node@0.2.8-next.2
  - @kozmoai/plugin-permission-node@0.7.2-next.2
  - @kozmoai/config@1.0.5-next.1
  - @kozmoai/errors@1.1.4-next.1
  - @kozmoai/plugin-permission-common@0.7.2-next.1

## 0.5.14-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.17.0-next.1
  - @kozmoai/plugin-auth-node@0.2.8-next.1
  - @kozmoai/plugin-permission-node@0.7.2-next.1
  - @kozmoai/config@1.0.5-next.1
  - @kozmoai/errors@1.1.4-next.1
  - @kozmoai/plugin-permission-common@0.7.2-next.1

## 0.5.14-next.0

### Patch Changes

- 3280711113: Updated dependency `msw` to `^0.49.0`.
- Updated dependencies
  - @kozmoai/backend-common@0.16.1-next.0
  - @kozmoai/plugin-auth-node@0.2.8-next.0
  - @kozmoai/plugin-permission-common@0.7.2-next.0
  - @kozmoai/plugin-permission-node@0.7.2-next.0
  - @kozmoai/config@1.0.5-next.0
  - @kozmoai/errors@1.1.4-next.0

## 0.5.13

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.16.0
  - @kozmoai/plugin-auth-node@0.2.7
  - @kozmoai/plugin-permission-common@0.7.1
  - @kozmoai/plugin-permission-node@0.7.1
  - @kozmoai/config@1.0.4
  - @kozmoai/errors@1.1.3

## 0.5.13-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.16.0-next.1
  - @kozmoai/plugin-auth-node@0.2.7-next.1
  - @kozmoai/plugin-permission-node@0.7.1-next.1
  - @kozmoai/config@1.0.4-next.0
  - @kozmoai/errors@1.1.3-next.0
  - @kozmoai/plugin-permission-common@0.7.1-next.0

## 0.5.13-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.16.0-next.0
  - @kozmoai/plugin-auth-node@0.2.7-next.0
  - @kozmoai/plugin-permission-common@0.7.1-next.0
  - @kozmoai/plugin-permission-node@0.7.1-next.0
  - @kozmoai/config@1.0.4-next.0
  - @kozmoai/errors@1.1.3-next.0

## 0.5.12

### Patch Changes

- 2d3a5f09ab: Use `response.json` rather than `response.send` where appropriate, as outlined in `SECURITY.md`
- Updated dependencies
  - @kozmoai/backend-common@0.15.2
  - @kozmoai/plugin-auth-node@0.2.6
  - @kozmoai/plugin-permission-node@0.7.0
  - @kozmoai/plugin-permission-common@0.7.0
  - @kozmoai/config@1.0.3
  - @kozmoai/errors@1.1.2

## 0.5.12-next.2

### Patch Changes

- 2d3a5f09ab: Use `response.json` rather than `response.send` where appropriate, as outlined in `SECURITY.md`
- Updated dependencies
  - @kozmoai/backend-common@0.15.2-next.2
  - @kozmoai/plugin-permission-common@0.7.0-next.2
  - @kozmoai/plugin-permission-node@0.7.0-next.2
  - @kozmoai/plugin-auth-node@0.2.6-next.2
  - @kozmoai/config@1.0.3-next.2
  - @kozmoai/errors@1.1.2-next.2

## 0.5.12-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.15.2-next.1
  - @kozmoai/config@1.0.3-next.1
  - @kozmoai/errors@1.1.2-next.1
  - @kozmoai/plugin-auth-node@0.2.6-next.1
  - @kozmoai/plugin-permission-common@0.6.5-next.1
  - @kozmoai/plugin-permission-node@0.6.6-next.1

## 0.5.12-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.15.2-next.0
  - @kozmoai/plugin-auth-node@0.2.6-next.0
  - @kozmoai/plugin-permission-node@0.6.6-next.0
  - @kozmoai/config@1.0.3-next.0
  - @kozmoai/errors@1.1.2-next.0
  - @kozmoai/plugin-permission-common@0.6.5-next.0

## 0.5.11

### Patch Changes

- 667d917488: Updated dependency `msw` to `^0.47.0`.
- 87ec2ba4d6: Updated dependency `msw` to `^0.46.0`.
- bf5e9030eb: Updated dependency `msw` to `^0.45.0`.
- 2cbd533426: Uptake the `IdentityApi` change to use `getIdentity` instead of `authenticate` for retrieving the logged in users identity.
- Updated dependencies
  - @kozmoai/backend-common@0.15.1
  - @kozmoai/plugin-auth-node@0.2.5
  - @kozmoai/plugin-permission-node@0.6.5
  - @kozmoai/config@1.0.2
  - @kozmoai/errors@1.1.1
  - @kozmoai/plugin-permission-common@0.6.4

## 0.5.11-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/config@1.0.2-next.0
  - @kozmoai/errors@1.1.1-next.0
  - @kozmoai/plugin-permission-common@0.6.4-next.2
  - @kozmoai/backend-common@0.15.1-next.3
  - @kozmoai/plugin-auth-node@0.2.5-next.3
  - @kozmoai/plugin-permission-node@0.6.5-next.3

## 0.5.11-next.1

### Patch Changes

- 667d917488: Updated dependency `msw` to `^0.47.0`.
- 87ec2ba4d6: Updated dependency `msw` to `^0.46.0`.
- 2cbd533426: Uptake the `IdentityApi` change to use `getIdentity` instead of `authenticate` for retrieving the logged in users identity.
- Updated dependencies
  - @kozmoai/backend-common@0.15.1-next.2
  - @kozmoai/plugin-auth-node@0.2.5-next.2
  - @kozmoai/plugin-permission-common@0.6.4-next.1
  - @kozmoai/plugin-permission-node@0.6.5-next.2

## 0.5.11-next.0

### Patch Changes

- bf5e9030eb: Updated dependency `msw` to `^0.45.0`.
- Updated dependencies
  - @kozmoai/backend-common@0.15.1-next.0
  - @kozmoai/plugin-auth-node@0.2.5-next.0
  - @kozmoai/plugin-permission-common@0.6.4-next.0
  - @kozmoai/plugin-permission-node@0.6.5-next.0

## 0.5.10

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.15.0
  - @kozmoai/plugin-auth-node@0.2.4
  - @kozmoai/plugin-permission-node@0.6.4

## 0.5.10-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.15.0-next.0
  - @kozmoai/plugin-auth-node@0.2.4-next.0
  - @kozmoai/plugin-permission-node@0.6.4-next.0

## 0.5.9

### Patch Changes

- a70869e775: Updated dependency `msw` to `^0.43.0`.
- 8006d0f9bf: Updated dependency `msw` to `^0.44.0`.
- Updated dependencies
  - @kozmoai/backend-common@0.14.1
  - @kozmoai/plugin-auth-node@0.2.3
  - @kozmoai/plugin-permission-common@0.6.3
  - @kozmoai/plugin-permission-node@0.6.3
  - @kozmoai/errors@1.1.0

## 0.5.9-next.2

### Patch Changes

- a70869e775: Updated dependency `msw` to `^0.43.0`.
- Updated dependencies
  - @kozmoai/backend-common@0.14.1-next.3
  - @kozmoai/plugin-auth-node@0.2.3-next.2
  - @kozmoai/plugin-permission-common@0.6.3-next.1
  - @kozmoai/plugin-permission-node@0.6.3-next.2

## 0.5.9-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.14.1-next.1
  - @kozmoai/errors@1.1.0-next.0
  - @kozmoai/plugin-auth-node@0.2.3-next.1
  - @kozmoai/plugin-permission-common@0.6.3-next.0
  - @kozmoai/plugin-permission-node@0.6.3-next.1

## 0.5.9-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.14.1-next.0
  - @kozmoai/plugin-auth-node@0.2.3-next.0
  - @kozmoai/plugin-permission-node@0.6.3-next.0

## 0.5.8

### Patch Changes

- 8f7b1835df: Updated dependency `msw` to `^0.41.0`.
- Updated dependencies
  - @kozmoai/plugin-permission-node@0.6.2
  - @kozmoai/backend-common@0.14.0
  - @kozmoai/plugin-auth-node@0.2.2
  - @kozmoai/plugin-permission-common@0.6.2

## 0.5.8-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.14.0-next.2
  - @kozmoai/plugin-auth-node@0.2.2-next.2
  - @kozmoai/plugin-permission-node@0.6.2-next.2

## 0.5.8-next.1

### Patch Changes

- 8f7b1835df: Updated dependency `msw` to `^0.41.0`.
- Updated dependencies
  - @kozmoai/backend-common@0.13.6-next.1
  - @kozmoai/plugin-auth-node@0.2.2-next.1
  - @kozmoai/plugin-permission-common@0.6.2-next.0
  - @kozmoai/plugin-permission-node@0.6.2-next.1

## 0.5.8-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.13.6-next.0
  - @kozmoai/plugin-auth-node@0.2.2-next.0
  - @kozmoai/plugin-permission-node@0.6.2-next.0

## 0.5.7

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.13.3
  - @kozmoai/config@1.0.1
  - @kozmoai/plugin-auth-node@0.2.1
  - @kozmoai/plugin-permission-common@0.6.1
  - @kozmoai/plugin-permission-node@0.6.1

## 0.5.7-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.13.3-next.2
  - @kozmoai/config@1.0.1-next.0
  - @kozmoai/plugin-auth-node@0.2.1-next.1
  - @kozmoai/plugin-permission-common@0.6.1-next.0
  - @kozmoai/plugin-permission-node@0.6.1-next.1

## 0.5.7-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.13.3-next.0
  - @kozmoai/plugin-auth-node@0.2.1-next.0
  - @kozmoai/plugin-permission-node@0.6.1-next.0

## 0.5.6

### Patch Changes

- c98d271466: Use updated types from `@kozmoai/plugin-permission-common`
- 95284162d6: - Add more specific check for policies which return conditional decisions for non-resource permissions.
  - Refine permission validation in authorize endpoint to differentiate between `BasicPermission` and `ResourcePermission` instances.
- Updated dependencies
  - @kozmoai/plugin-permission-common@0.6.0
  - @kozmoai/plugin-permission-node@0.6.0
  - @kozmoai/plugin-auth-node@0.2.0
  - @kozmoai/backend-common@0.13.2

## 0.5.6-next.1

### Patch Changes

- c98d271466: Use updated types from `@kozmoai/plugin-permission-common`
- 95284162d6: - Add more specific check for policies which return conditional decisions for non-resource permissions.
  - Refine permission validation in authorize endpoint to differentiate between `BasicPermission` and `ResourcePermission` instances.
- Updated dependencies
  - @kozmoai/plugin-permission-common@0.6.0-next.0
  - @kozmoai/plugin-permission-node@0.6.0-next.1
  - @kozmoai/backend-common@0.13.2-next.1

## 0.5.6-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-auth-node@0.2.0-next.0
  - @kozmoai/backend-common@0.13.2-next.0
  - @kozmoai/plugin-permission-node@0.5.6-next.0

## 0.5.5

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.13.1
  - @kozmoai/config@1.0.0
  - @kozmoai/errors@1.0.0
  - @kozmoai/plugin-permission-common@0.5.3
  - @kozmoai/plugin-auth-node@0.1.6
  - @kozmoai/plugin-permission-node@0.5.5

## 0.5.4

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.13.0
  - @kozmoai/plugin-auth-node@0.1.5
  - @kozmoai/plugin-permission-node@0.5.4

## 0.5.4-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.13.0-next.0
  - @kozmoai/plugin-auth-node@0.1.5-next.0
  - @kozmoai/plugin-permission-node@0.5.4-next.0

## 0.5.3

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.12.0
  - @kozmoai/plugin-permission-common@0.5.2
  - @kozmoai/plugin-permission-node@0.5.3
  - @kozmoai/plugin-auth-node@0.1.4

## 0.5.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.11.0
  - @kozmoai/plugin-permission-node@0.5.2
  - @kozmoai/plugin-auth-node@0.1.3

## 0.5.1

### Patch Changes

- Fix for the previous release with missing type declarations.
- Updated dependencies
  - @kozmoai/backend-common@0.10.9
  - @kozmoai/config@0.1.15
  - @kozmoai/errors@0.2.2
  - @kozmoai/plugin-auth-node@0.1.2
  - @kozmoai/plugin-permission-common@0.5.1
  - @kozmoai/plugin-permission-node@0.5.1

## 0.5.0

### Minor Changes

- e2cf0662eb: Add a warning if the permission backend is used without setting `permission.enabled=true`.

  **BREAKING** Permission backend's `createRouter` now requires a `config` option.

  ```diff
  // packages/backend/src/plugins/permission.ts

  ...
  export default async function createPlugin({
    ...
  + config,
  }: PluginEnvironment) {
    return createRouter({
      ...
  +   config,
    });
  }
  ```

### Patch Changes

- 1ed305728b: Bump `node-fetch` to version 2.6.7 and `cross-fetch` to version 3.1.5
- c77c5c7eb6: Added `glint.role` to `package.json`
- Updated dependencies
  - @kozmoai/backend-common@0.10.8
  - @kozmoai/errors@0.2.1
  - @kozmoai/plugin-auth-node@0.1.1
  - @kozmoai/plugin-permission-common@0.5.0
  - @kozmoai/config@0.1.14
  - @kozmoai/plugin-permission-node@0.5.0

## 0.4.3

### Patch Changes

- b3f3e42036: Use `getBearerTokenFromAuthorizationHeader` from `@kozmoai/plugin-auth-node` instead of the deprecated `IdentityClient` method.
- Updated dependencies
  - @kozmoai/backend-common@0.10.7
  - @kozmoai/plugin-auth-node@0.1.0
  - @kozmoai/plugin-permission-node@0.4.3

## 0.4.3-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-auth-backend@0.10.0-next.0
  - @kozmoai/backend-common@0.10.7-next.0
  - @kozmoai/plugin-permission-node@0.4.3-next.0

## 0.4.2

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-auth-backend@0.9.0
  - @kozmoai/backend-common@0.10.6
  - @kozmoai/plugin-permission-node@0.4.2

## 0.4.2-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-auth-backend@0.9.0-next.1
  - @kozmoai/backend-common@0.10.6-next.0
  - @kozmoai/plugin-permission-node@0.4.2-next.1

## 0.4.2-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-auth-backend@0.9.0-next.0
  - @kozmoai/plugin-permission-node@0.4.2-next.0

## 0.4.1

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-auth-backend@0.8.0
  - @kozmoai/backend-common@0.10.5
  - @kozmoai/plugin-permission-node@0.4.1

## 0.4.0

### Minor Changes

- b768259244: **BREAKING**: Wrap batched requests and responses to /authorize in an envelope object. The latest version of the PermissionClient in @kozmoai/permission-common uses the new format - as long as the permission-backend is consumed using this client, no other changes are necessary.

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-auth-backend@0.7.0
  - @kozmoai/plugin-permission-common@0.4.0
  - @kozmoai/backend-common@0.10.4
  - @kozmoai/config@0.1.13
  - @kozmoai/plugin-permission-node@0.4.0

## 0.4.0-next.0

### Minor Changes

- b768259244: **BREAKING**: Wrap batched requests and responses to /authorize in an envelope object. The latest version of the PermissionClient in @kozmoai/permission-common uses the new format - as long as the permission-backend is consumed using this client, no other changes are necessary.

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-auth-backend@0.7.0-next.0
  - @kozmoai/plugin-permission-common@0.4.0-next.0
  - @kozmoai/backend-common@0.10.4-next.0
  - @kozmoai/config@0.1.13-next.0
  - @kozmoai/plugin-permission-node@0.4.0-next.0

## 0.3.0

### Minor Changes

- 419ca637c0: Optimizations to the integration between the permission backend and plugin-backends using createPermissionIntegrationRouter:

  - The permission backend already supported batched requests to authorize, but would make calls to plugin backend to apply conditions serially. Now, after applying the policy for each authorization request, the permission backend makes a single batched /apply-conditions request to each plugin backend referenced in policy decisions.
  - The `getResource` method accepted by `createPermissionIntegrationRouter` has been replaced with `getResources`, to allow consumers to make batch requests to upstream data stores. When /apply-conditions is called with a batch of requests, all required resources are requested in a single invocation of `getResources`.

  Plugin owners consuming `createPermissionIntegrationRouter` should replace the `getResource` method in the options with a `getResources` method, accepting an array of resourceRefs, and returning an array of the corresponding resources.

### Patch Changes

- Updated dependencies
  - @kozmoai/config@0.1.12
  - @kozmoai/backend-common@0.10.3
  - @kozmoai/plugin-permission-node@0.3.0
  - @kozmoai/plugin-auth-backend@0.6.2
  - @kozmoai/errors@0.2.0
  - @kozmoai/plugin-permission-common@0.3.1

## 0.2.3

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-auth-backend@0.6.0
  - @kozmoai/backend-common@0.10.1
  - @kozmoai/plugin-permission-node@0.2.3

## 0.2.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.10.0
  - @kozmoai/plugin-auth-backend@0.5.2
  - @kozmoai/plugin-permission-common@0.3.0
  - @kozmoai/plugin-permission-node@0.2.2

## 0.2.1

### Patch Changes

- a036b65c2f: Updated to use the new `GlintIdentityResponse` type from `@kozmoai/plugin-auth-backend`.

  The `GlintIdentityResponse` type is backwards compatible with the `GlintIdentity`, and provides an additional `identity` field with the claims of the user.

- Updated dependencies
  - @kozmoai/plugin-auth-backend@0.5.0
  - @kozmoai/backend-common@0.9.13
  - @kozmoai/plugin-permission-node@0.2.1

## 0.2.0

### Minor Changes

- 450ca92330: Change route used for integration between the authorization framework and other plugin backends to use the /.well-known prefix.

### Patch Changes

- e7851efa9e: Rename and adjust permission policy return type to reduce nesting
- Updated dependencies
  - @kozmoai/plugin-auth-backend@0.4.10
  - @kozmoai/plugin-permission-node@0.2.0
  - @kozmoai/backend-common@0.9.12

## 0.1.0

### Minor Changes

- 7a8312f126: New package containing the backend for authorization and permissions. For more information, see the [authorization PRFC](https://github.com/kozmoai/glint/pull/7761).

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-auth-backend@0.4.9
  - @kozmoai/plugin-permission-node@0.1.0
  - @kozmoai/backend-common@0.9.11
  - @kozmoai/plugin-permission-common@0.2.0