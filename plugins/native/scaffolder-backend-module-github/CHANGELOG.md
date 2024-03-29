# @kozmoai/plugin-scaffolder-backend-module-github

## 0.2.4-next.1

### Patch Changes

- 35fe005: Export `getOctokitOptions` for easy re-use of Octokit configuration handling
- Updated dependencies
  - @kozmoai/config@1.2.0-next.1
  - @kozmoai/plugin-scaffolder-node@0.4.0-next.1
  - @kozmoai/backend-common@0.21.4-next.1
  - @kozmoai/backend-plugin-api@0.6.14-next.1
  - @kozmoai/integration@1.9.1-next.1
  - @kozmoai/errors@1.2.4-next.0

## 0.2.3-next.0

### Patch Changes

- f44589d: Introduced `createMockActionContext` to unify the way of creating scaffolder mock context.

  It will help to maintain tests in a long run during structural changes of action context.

- 1753898: Updated dependency `octokit-plugin-create-pull-request` to `^5.0.0`.
- Updated dependencies
  - @kozmoai/backend-common@0.21.3-next.0
  - @kozmoai/errors@1.2.4-next.0
  - @kozmoai/plugin-scaffolder-node@0.3.3-next.0
  - @kozmoai/backend-plugin-api@0.6.13-next.0
  - @kozmoai/config@1.1.2-next.0
  - @kozmoai/integration@1.9.1-next.0

## 0.2.0

### Minor Changes

- fd5eb1c: Allow to force the creation of a pull request from a forked repository
- 3d5c668: support oidc customization

### Patch Changes

- e9a5228: Exporting a default module for the new Backend System
- 8472188: Added or fixed the `repository` field in `package.json`.
- 6bb6f3e: Updated dependency `fs-extra` to `^11.2.0`.
  Updated dependency `@types/fs-extra` to `^11.0.0`.
- Updated dependencies
  - @kozmoai/backend-common@0.21.0
  - @kozmoai/backend-plugin-api@0.6.10
  - @kozmoai/integration@1.9.0
  - @kozmoai/plugin-scaffolder-node@0.3.0
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3

## 0.2.0-next.3

### Patch Changes

- 8472188: Added or fixed the `repository` field in `package.json`.
- Updated dependencies
  - @kozmoai/backend-common@0.21.0-next.3
  - @kozmoai/integration@1.9.0-next.1
  - @kozmoai/plugin-scaffolder-node@0.3.0-next.3
  - @kozmoai/backend-plugin-api@0.6.10-next.3
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3

## 0.2.0-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.21.0-next.2
  - @kozmoai/backend-plugin-api@0.6.10-next.2
  - @kozmoai/plugin-scaffolder-node@0.3.0-next.2
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/integration@1.9.0-next.0

## 0.2.0-next.1

### Minor Changes

- fd5eb1c: Allow to force the creation of a pull request from a forked repository

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.6.10-next.1
  - @kozmoai/backend-common@0.21.0-next.1
  - @kozmoai/integration@1.9.0-next.0
  - @kozmoai/plugin-scaffolder-node@0.3.0-next.1
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3

## 0.1.2-next.0

### Patch Changes

- e9a5228: Exporting a default module for the new Backend System
- Updated dependencies
  - @kozmoai/backend-common@0.21.0-next.0
  - @kozmoai/plugin-scaffolder-node@0.3.0-next.0
  - @kozmoai/backend-plugin-api@0.6.10-next.0
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/integration@1.8.0

## 0.1.1

### Patch Changes

- 5470300: Ensure `teamReviewers` list is unique before calling API
- bf92ae3: Updated dependency `octokit` to `^3.0.0`.
- Updated dependencies
  - @kozmoai/backend-common@0.20.1
  - @kozmoai/plugin-scaffolder-node@0.2.10
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/integration@1.8.0

## 0.1.1-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.20.1-next.2
  - @kozmoai/plugin-scaffolder-node@0.2.10-next.2

## 0.1.1-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.20.1-next.1
  - @kozmoai/integration@1.8.0
  - @kozmoai/config@1.1.1
  - @kozmoai/plugin-scaffolder-node@0.2.10-next.1
  - @kozmoai/errors@1.2.3

## 0.1.1-next.0

### Patch Changes

- bf92ae3: Updated dependency `octokit` to `^3.0.0`.
- Updated dependencies
  - @kozmoai/backend-common@0.20.1-next.0
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/integration@1.8.0
  - @kozmoai/plugin-scaffolder-node@0.2.10-next.0

## 0.1.0

### Minor Changes

- 219d7f0: Create new scaffolder module for external integrations

### Patch Changes

- cb6a65e: The `scaffolder.defaultCommitMessage` config value is now being used if provided and uses "initial commit" when it is not provided.
- 28949ea: Add a new action for creating github-autolink references for a repository: `github:autolinks:create`
- Updated dependencies
  - @kozmoai/backend-common@0.20.0
  - @kozmoai/plugin-scaffolder-node@0.2.9
  - @kozmoai/integration@1.8.0
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3

## 0.1.0-next.0

### Minor Changes

- 219d7f0: Create new scaffolder module for external integrations

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-scaffolder-node@0.2.9-next.3
  - @kozmoai/backend-common@0.20.0-next.3
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/integration@1.8.0-next.1