# @kozmoai/plugin-catalog-backend-module-aws

## 0.3.8-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/config@1.2.0-next.1
  - @kozmoai/backend-common@0.21.4-next.1
  - @kozmoai/backend-plugin-api@0.6.14-next.1
  - @kozmoai/backend-tasks@0.5.19-next.1
  - @kozmoai/integration@1.9.1-next.1
  - @kozmoai/integration-aws-node@0.1.10-next.1
  - @kozmoai/catalog-model@1.4.5-next.0
  - @kozmoai/errors@1.2.4-next.0
  - @kozmoai/plugin-catalog-common@1.0.22-next.1
  - @kozmoai/plugin-catalog-node@1.8.0-next.1
  - @kozmoai/plugin-kubernetes-common@0.7.5-next.1

## 0.3.7-next.0

### Patch Changes

- 0fb419b: Updated dependency `uuid` to `^9.0.0`.
  Updated dependency `@types/uuid` to `^9.0.0`.
- Updated dependencies
  - @kozmoai/backend-common@0.21.3-next.0
  - @kozmoai/errors@1.2.4-next.0
  - @kozmoai/backend-plugin-api@0.6.13-next.0
  - @kozmoai/plugin-catalog-node@1.8.0-next.0
  - @kozmoai/backend-tasks@0.5.18-next.0
  - @kozmoai/plugin-kubernetes-common@0.7.5-next.0
  - @kozmoai/catalog-model@1.4.5-next.0
  - @kozmoai/config@1.1.2-next.0
  - @kozmoai/integration@1.9.1-next.0
  - @kozmoai/integration-aws-node@0.1.10-next.0
  - @kozmoai/plugin-catalog-common@1.0.22-next.0

## 0.3.4

### Patch Changes

- a81b1ba: The default EKS cluster entity transformer now sets the new
  `kubernetes.io/x-k8s-aws-id` annotation.
- 22927c4: Move the AWS account e-mail from labels to annotations to fix the creation of `cloud-account` resources.
- Updated dependencies
  - @kozmoai/backend-common@0.21.0
  - @kozmoai/plugin-kubernetes-common@0.7.4
  - @kozmoai/backend-plugin-api@0.6.10
  - @kozmoai/backend-tasks@0.5.15
  - @kozmoai/catalog-model@1.4.4
  - @kozmoai/integration-aws-node@0.1.9
  - @kozmoai/integration@1.9.0
  - @kozmoai/plugin-catalog-node@1.7.0
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/plugin-catalog-common@1.0.21

## 0.3.4-next.3

### Patch Changes

- 22927c4: Move the AWS account e-mail from labels to annotations to fix the creation of `cloud-account` resources.
- Updated dependencies
  - @kozmoai/backend-common@0.21.0-next.3
  - @kozmoai/plugin-kubernetes-common@0.7.4-next.2
  - @kozmoai/integration-aws-node@0.1.9-next.0
  - @kozmoai/integration@1.9.0-next.1
  - @kozmoai/backend-tasks@0.5.15-next.3
  - @kozmoai/plugin-catalog-node@1.6.2-next.3
  - @kozmoai/backend-plugin-api@0.6.10-next.3
  - @kozmoai/catalog-model@1.4.4-next.0
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/plugin-catalog-common@1.0.21-next.0

## 0.3.4-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.21.0-next.2
  - @kozmoai/backend-plugin-api@0.6.10-next.2
  - @kozmoai/backend-tasks@0.5.15-next.2
  - @kozmoai/plugin-catalog-node@1.6.2-next.2
  - @kozmoai/config@1.1.1
  - @kozmoai/integration-aws-node@0.1.8
  - @kozmoai/catalog-model@1.4.4-next.0
  - @kozmoai/errors@1.2.3
  - @kozmoai/integration@1.9.0-next.0
  - @kozmoai/plugin-catalog-common@1.0.21-next.0
  - @kozmoai/plugin-kubernetes-common@0.7.4-next.1

## 0.3.4-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-model@1.4.4-next.0
  - @kozmoai/backend-plugin-api@0.6.10-next.1
  - @kozmoai/backend-common@0.21.0-next.1
  - @kozmoai/integration@1.9.0-next.0
  - @kozmoai/backend-tasks@0.5.15-next.1
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/integration-aws-node@0.1.8
  - @kozmoai/plugin-catalog-common@1.0.21-next.0
  - @kozmoai/plugin-catalog-node@1.6.2-next.1
  - @kozmoai/plugin-kubernetes-common@0.7.4-next.1

## 0.3.4-next.0

### Patch Changes

- a81b1ba: The default EKS cluster entity transformer now sets the new
  `kubernetes.io/x-k8s-aws-id` annotation.
- Updated dependencies
  - @kozmoai/backend-common@0.21.0-next.0
  - @kozmoai/plugin-kubernetes-common@0.7.4-next.0
  - @kozmoai/backend-tasks@0.5.15-next.0
  - @kozmoai/plugin-catalog-node@1.6.2-next.0
  - @kozmoai/backend-plugin-api@0.6.10-next.0
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/integration@1.8.0
  - @kozmoai/integration-aws-node@0.1.8
  - @kozmoai/plugin-catalog-common@1.0.20

## 0.3.3

### Patch Changes

- 4016f21: Remove some unused dependencies
- 22e88d0: Added status and e-mail as labels to the AWS Account Resource
- Updated dependencies
  - @kozmoai/backend-common@0.20.1
  - @kozmoai/backend-plugin-api@0.6.9
  - @kozmoai/plugin-kubernetes-common@0.7.3
  - @kozmoai/plugin-catalog-node@1.6.1
  - @kozmoai/backend-tasks@0.5.14
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/integration@1.8.0
  - @kozmoai/integration-aws-node@0.1.8
  - @kozmoai/plugin-catalog-common@1.0.20

## 0.3.3-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.6.9-next.2
  - @kozmoai/backend-common@0.20.1-next.2
  - @kozmoai/plugin-catalog-node@1.6.1-next.2
  - @kozmoai/backend-tasks@0.5.14-next.2

## 0.3.3-next.1

### Patch Changes

- 22e88d0: Added status and e-mail as labels to the AWS Account Resource
- Updated dependencies
  - @kozmoai/backend-common@0.20.1-next.1
  - @kozmoai/integration@1.8.0
  - @kozmoai/integration-aws-node@0.1.8
  - @kozmoai/config@1.1.1
  - @kozmoai/backend-tasks@0.5.14-next.1
  - @kozmoai/backend-plugin-api@0.6.9-next.1
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/errors@1.2.3
  - @kozmoai/plugin-catalog-common@1.0.19
  - @kozmoai/plugin-catalog-node@1.6.1-next.1
  - @kozmoai/plugin-kubernetes-common@0.7.3-next.0

## 0.3.3-next.0

### Patch Changes

- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @kozmoai/backend-common@0.20.1-next.0
  - @kozmoai/plugin-kubernetes-common@0.7.3-next.0
  - @kozmoai/plugin-catalog-node@1.6.1-next.0
  - @kozmoai/backend-plugin-api@0.6.9-next.0
  - @kozmoai/backend-tasks@0.5.14-next.0
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/integration@1.8.0
  - @kozmoai/integration-aws-node@0.1.8
  - @kozmoai/plugin-catalog-common@1.0.19

## 0.3.2

### Patch Changes

- cc4228e: Switched module ID to use kebab-case.
- Updated dependencies
  - @kozmoai/backend-common@0.20.0
  - @kozmoai/plugin-catalog-node@1.6.0
  - @kozmoai/backend-tasks@0.5.13
  - @kozmoai/plugin-kubernetes-common@0.7.2
  - @kozmoai/integration@1.8.0
  - @kozmoai/backend-plugin-api@0.6.8
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/integration-aws-node@0.1.8
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-catalog-common@1.0.19

## 0.3.2-next.3

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.20.0-next.3
  - @kozmoai/backend-plugin-api@0.6.8-next.3
  - @kozmoai/backend-tasks@0.5.13-next.3
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/integration@1.8.0-next.1
  - @kozmoai/integration-aws-node@0.1.8
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-catalog-common@1.0.18
  - @kozmoai/plugin-catalog-node@1.6.0-next.3
  - @kozmoai/plugin-kubernetes-common@0.7.2-next.1

## 0.3.2-next.2

### Patch Changes

- cc4228e: Switched module ID to use kebab-case.
- Updated dependencies
  - @kozmoai/plugin-catalog-node@1.6.0-next.2
  - @kozmoai/backend-common@0.20.0-next.2
  - @kozmoai/backend-plugin-api@0.6.8-next.2
  - @kozmoai/backend-tasks@0.5.13-next.2
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/integration@1.8.0-next.1
  - @kozmoai/integration-aws-node@0.1.8
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-catalog-common@1.0.18
  - @kozmoai/plugin-kubernetes-common@0.7.2-next.1

## 0.3.2-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/integration@1.8.0-next.1
  - @kozmoai/backend-common@0.20.0-next.1
  - @kozmoai/plugin-kubernetes-common@0.7.2-next.1
  - @kozmoai/backend-plugin-api@0.6.8-next.1
  - @kozmoai/backend-tasks@0.5.13-next.1
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/integration-aws-node@0.1.8
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-catalog-common@1.0.18
  - @kozmoai/plugin-catalog-node@1.5.1-next.1

## 0.3.2-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.20.0-next.0
  - @kozmoai/backend-tasks@0.5.13-next.0
  - @kozmoai/plugin-kubernetes-common@0.7.2-next.0
  - @kozmoai/integration@1.8.0-next.0
  - @kozmoai/plugin-catalog-node@1.5.1-next.0
  - @kozmoai/backend-plugin-api@0.6.8-next.0
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/integration-aws-node@0.1.8
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-catalog-common@1.0.18

## 0.3.1

### Patch Changes

- 20d97d28a3: Updated dependency `aws-sdk-client-mock-jest` to `^3.0.0`.
- 3d043526f4: Updated dependency `aws-sdk-client-mock` to `^3.0.0`.
- Updated dependencies
  - @kozmoai/plugin-catalog-node@1.5.0
  - @kozmoai/plugin-kubernetes-common@0.7.1
  - @kozmoai/integration@1.7.2
  - @kozmoai/backend-common@0.19.9
  - @kozmoai/backend-plugin-api@0.6.7
  - @kozmoai/backend-tasks@0.5.12
  - @kozmoai/integration-aws-node@0.1.8
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-catalog-common@1.0.18

## 0.3.1-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-kubernetes-common@0.7.1-next.1
  - @kozmoai/backend-plugin-api@0.6.7-next.2
  - @kozmoai/backend-common@0.19.9-next.2
  - @kozmoai/backend-tasks@0.5.12-next.2
  - @kozmoai/plugin-catalog-node@1.5.0-next.2

## 0.3.1-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-node@1.5.0-next.1
  - @kozmoai/integration@1.7.2-next.0
  - @kozmoai/backend-common@0.19.9-next.1
  - @kozmoai/backend-tasks@0.5.12-next.1
  - @kozmoai/backend-plugin-api@0.6.7-next.1
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/integration-aws-node@0.1.7
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-catalog-common@1.0.17
  - @kozmoai/plugin-kubernetes-common@0.7.1-next.0

## 0.3.1-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.19.9-next.0
  - @kozmoai/integration@1.7.1
  - @kozmoai/integration-aws-node@0.1.7
  - @kozmoai/backend-plugin-api@0.6.7-next.0
  - @kozmoai/backend-tasks@0.5.12-next.0
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/config@1.1.1
  - @kozmoai/errors@1.2.3
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-catalog-common@1.0.17
  - @kozmoai/plugin-catalog-node@1.4.8-next.0
  - @kozmoai/plugin-kubernetes-common@0.7.1-next.0

## 0.3.0

### Minor Changes

- 5abc2fd4d6: AwsEksClusterProcessor supports Entity callback function and passes in region when initialize EKS cluster

### Patch Changes

- 890e3b5ad4: Make sure to include the error message when ingestion fails
- Updated dependencies
  - @kozmoai/backend-tasks@0.5.11
  - @kozmoai/backend-common@0.19.8
  - @kozmoai/integration@1.7.1
  - @kozmoai/plugin-catalog-node@1.4.7
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/errors@1.2.3
  - @kozmoai/plugin-kubernetes-common@0.7.0
  - @kozmoai/backend-plugin-api@0.6.6
  - @kozmoai/config@1.1.1
  - @kozmoai/integration-aws-node@0.1.7
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-catalog-common@1.0.17

## 0.2.9-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.19.8-next.2
  - @kozmoai/catalog-model@1.4.3-next.0
  - @kozmoai/integration@1.7.1-next.1
  - @kozmoai/errors@1.2.3-next.0
  - @kozmoai/plugin-kubernetes-common@0.7.0-next.1
  - @kozmoai/backend-tasks@0.5.11-next.2
  - @kozmoai/plugin-catalog-node@1.4.7-next.2
  - @kozmoai/backend-plugin-api@0.6.6-next.2
  - @kozmoai/config@1.1.1-next.0
  - @kozmoai/integration-aws-node@0.1.7-next.0
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-catalog-common@1.0.17-next.0

## 0.2.8-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-tasks@0.5.10-next.1
  - @kozmoai/plugin-catalog-node@1.4.6-next.1
  - @kozmoai/backend-common@0.19.7-next.1
  - @kozmoai/plugin-kubernetes-common@0.7.0-next.0
  - @kozmoai/backend-plugin-api@0.6.5-next.1
  - @kozmoai/config@1.1.0
  - @kozmoai/integration-aws-node@0.1.6
  - @kozmoai/catalog-model@1.4.2
  - @kozmoai/errors@1.2.2
  - @kozmoai/integration@1.7.1-next.0
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-catalog-common@1.0.16

## 0.2.8-next.0

### Patch Changes

- 890e3b5ad4: Make sure to include the error message when ingestion fails
- Updated dependencies
  - @kozmoai/integration@1.7.1-next.0
  - @kozmoai/backend-common@0.19.7-next.0
  - @kozmoai/config@1.1.0
  - @kozmoai/integration-aws-node@0.1.6
  - @kozmoai/backend-plugin-api@0.6.5-next.0
  - @kozmoai/backend-tasks@0.5.10-next.0
  - @kozmoai/catalog-model@1.4.2
  - @kozmoai/errors@1.2.2
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-catalog-common@1.0.16
  - @kozmoai/plugin-catalog-node@1.4.6-next.0
  - @kozmoai/plugin-kubernetes-common@0.6.6

## 0.2.6

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

- Updated dependencies
  - @kozmoai/plugin-kubernetes-common@0.6.6
  - @kozmoai/backend-tasks@0.5.8
  - @kozmoai/backend-common@0.19.5
  - @kozmoai/config@1.1.0
  - @kozmoai/catalog-model@1.4.2
  - @kozmoai/errors@1.2.2
  - @kozmoai/integration@1.7.0
  - @kozmoai/plugin-catalog-common@1.0.16
  - @kozmoai/types@1.1.1
  - @kozmoai/backend-plugin-api@0.6.3
  - @kozmoai/plugin-catalog-node@1.4.4
  - @kozmoai/integration-aws-node@0.1.6

## 0.2.6-next.3

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

- Updated dependencies
  - @kozmoai/catalog-model@1.4.2-next.2
  - @kozmoai/config@1.1.0-next.2
  - @kozmoai/errors@1.2.2-next.0
  - @kozmoai/integration@1.7.0-next.3
  - @kozmoai/plugin-catalog-common@1.0.16-next.2
  - @kozmoai/plugin-kubernetes-common@0.6.6-next.2
  - @kozmoai/types@1.1.1-next.0
  - @kozmoai/backend-plugin-api@0.6.3-next.3
  - @kozmoai/backend-common@0.19.5-next.3
  - @kozmoai/backend-tasks@0.5.8-next.3
  - @kozmoai/integration-aws-node@0.1.6-next.2
  - @kozmoai/plugin-catalog-node@1.4.4-next.3

## 0.2.6-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/config@1.1.0-next.1
  - @kozmoai/backend-tasks@0.5.8-next.2
  - @kozmoai/backend-common@0.19.5-next.2
  - @kozmoai/plugin-catalog-node@1.4.4-next.2
  - @kozmoai/integration@1.7.0-next.2
  - @kozmoai/integration-aws-node@0.1.6-next.1
  - @kozmoai/backend-plugin-api@0.6.3-next.2
  - @kozmoai/catalog-model@1.4.2-next.1
  - @kozmoai/errors@1.2.1
  - @kozmoai/types@1.1.0
  - @kozmoai/plugin-catalog-common@1.0.16-next.1
  - @kozmoai/plugin-kubernetes-common@0.6.6-next.1

## 0.2.6-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-kubernetes-common@0.6.6-next.0
  - @kozmoai/config@1.1.0-next.0
  - @kozmoai/integration@1.7.0-next.1
  - @kozmoai/backend-tasks@0.5.8-next.1
  - @kozmoai/backend-common@0.19.5-next.1
  - @kozmoai/backend-plugin-api@0.6.3-next.1
  - @kozmoai/catalog-model@1.4.2-next.0
  - @kozmoai/integration-aws-node@0.1.6-next.0
  - @kozmoai/plugin-catalog-node@1.4.4-next.1
  - @kozmoai/plugin-catalog-common@1.0.16-next.0
  - @kozmoai/errors@1.2.1
  - @kozmoai/types@1.1.0

## 0.2.5-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.19.4-next.0
  - @kozmoai/integration@1.7.0-next.0
  - @kozmoai/backend-tasks@0.5.7-next.0
  - @kozmoai/backend-plugin-api@0.6.2-next.0
  - @kozmoai/catalog-model@1.4.1
  - @kozmoai/config@1.0.8
  - @kozmoai/errors@1.2.1
  - @kozmoai/integration-aws-node@0.1.5
  - @kozmoai/types@1.1.0
  - @kozmoai/plugin-catalog-common@1.0.15
  - @kozmoai/plugin-catalog-node@1.4.3-next.0
  - @kozmoai/plugin-kubernetes-common@0.6.5

## 0.2.3

### Patch Changes

- 629cbd194a87: Use `coreServices.rootConfig` instead of `coreService.config`
- 4b82382ed8c2: Fixed invalid configuration schema. The configuration schema may be more strict as a result.
- b4222908b0c3: Added option to configure AWS `accountId` in `AwsS3EntityProvider`
- Updated dependencies
  - @kozmoai/backend-common@0.19.2
  - @kozmoai/backend-plugin-api@0.6.0
  - @kozmoai/plugin-catalog-node@1.4.1
  - @kozmoai/integration@1.6.0
  - @kozmoai/backend-tasks@0.5.5
  - @kozmoai/integration-aws-node@0.1.5
  - @kozmoai/catalog-model@1.4.1
  - @kozmoai/config@1.0.8
  - @kozmoai/errors@1.2.1
  - @kozmoai/types@1.1.0
  - @kozmoai/plugin-catalog-common@1.0.15
  - @kozmoai/plugin-kubernetes-common@0.6.5

## 0.2.3-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.6.0-next.2
  - @kozmoai/backend-tasks@0.5.5-next.2
  - @kozmoai/backend-common@0.19.2-next.2
  - @kozmoai/plugin-catalog-node@1.4.1-next.2

## 0.2.3-next.1

### Patch Changes

- 629cbd194a87: Use `coreServices.rootConfig` instead of `coreService.config`
- 4b82382ed8c2: Fixed invalid configuration schema. The configuration schema may be more strict as a result.
- b4222908b0c3: Added option to configure AWS `accountId` in `AwsS3EntityProvider`
- Updated dependencies
  - @kozmoai/backend-common@0.19.2-next.1
  - @kozmoai/plugin-catalog-node@1.4.1-next.1
  - @kozmoai/backend-plugin-api@0.6.0-next.1
  - @kozmoai/backend-tasks@0.5.5-next.1
  - @kozmoai/integration@1.5.1
  - @kozmoai/integration-aws-node@0.1.5
  - @kozmoai/catalog-model@1.4.1
  - @kozmoai/config@1.0.8
  - @kozmoai/errors@1.2.1
  - @kozmoai/types@1.1.0
  - @kozmoai/plugin-catalog-common@1.0.15
  - @kozmoai/plugin-kubernetes-common@0.6.5

## 0.2.3-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.19.2-next.0
  - @kozmoai/backend-plugin-api@0.5.5-next.0
  - @kozmoai/backend-tasks@0.5.5-next.0
  - @kozmoai/catalog-model@1.4.1
  - @kozmoai/config@1.0.8
  - @kozmoai/errors@1.2.1
  - @kozmoai/integration@1.5.1
  - @kozmoai/integration-aws-node@0.1.5
  - @kozmoai/types@1.1.0
  - @kozmoai/plugin-catalog-common@1.0.15
  - @kozmoai/plugin-catalog-node@1.4.1-next.0
  - @kozmoai/plugin-kubernetes-common@0.6.5

## 0.2.2

### Patch Changes

- Updated dependencies
  - @kozmoai/errors@1.2.1
  - @kozmoai/backend-common@0.19.1
  - @kozmoai/plugin-catalog-node@1.4.0
  - @kozmoai/backend-plugin-api@0.5.4
  - @kozmoai/backend-tasks@0.5.4
  - @kozmoai/catalog-model@1.4.1
  - @kozmoai/config@1.0.8
  - @kozmoai/integration@1.5.1
  - @kozmoai/integration-aws-node@0.1.5
  - @kozmoai/types@1.1.0
  - @kozmoai/plugin-catalog-common@1.0.15
  - @kozmoai/plugin-kubernetes-common@0.6.5

## 0.2.2-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/errors@1.2.1-next.0
  - @kozmoai/backend-common@0.19.1-next.0
  - @kozmoai/plugin-catalog-node@1.4.0-next.0
  - @kozmoai/backend-plugin-api@0.5.4-next.0
  - @kozmoai/backend-tasks@0.5.4-next.0
  - @kozmoai/catalog-model@1.4.1-next.0
  - @kozmoai/config@1.0.8
  - @kozmoai/integration@1.5.1-next.0
  - @kozmoai/integration-aws-node@0.1.5-next.0
  - @kozmoai/types@1.1.0
  - @kozmoai/plugin-catalog-common@1.0.15-next.0
  - @kozmoai/plugin-kubernetes-common@0.6.5-next.0

## 0.2.1

### Patch Changes

- 5f2c38c70f5b: Fix SNYK-JS-FASTXMLPARSER-5668858 (`fast-xml-parser`) by upgrading aws-sdk to at least the current latest version.
- Updated dependencies
  - @kozmoai/backend-common@0.19.0
  - @kozmoai/types@1.1.0
  - @kozmoai/integration-aws-node@0.1.4
  - @kozmoai/integration@1.5.0
  - @kozmoai/catalog-model@1.4.0
  - @kozmoai/errors@1.2.0
  - @kozmoai/backend-plugin-api@0.5.3
  - @kozmoai/backend-tasks@0.5.3
  - @kozmoai/plugin-catalog-node@1.3.7
  - @kozmoai/config@1.0.8
  - @kozmoai/plugin-catalog-common@1.0.14
  - @kozmoai/plugin-kubernetes-common@0.6.4

## 0.2.1-next.2

### Patch Changes

- 5f2c38c70f5b: Fix SNYK-JS-FASTXMLPARSER-5668858 (`fast-xml-parser`) by upgrading aws-sdk to at least the current latest version.
- Updated dependencies
  - @kozmoai/integration-aws-node@0.1.4-next.1
  - @kozmoai/backend-common@0.19.0-next.2
  - @kozmoai/catalog-model@1.4.0-next.1
  - @kozmoai/backend-plugin-api@0.5.3-next.2
  - @kozmoai/backend-tasks@0.5.3-next.2
  - @kozmoai/config@1.0.7
  - @kozmoai/errors@1.2.0-next.0
  - @kozmoai/integration@1.5.0-next.0
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-catalog-common@1.0.14-next.1
  - @kozmoai/plugin-catalog-node@1.3.7-next.2
  - @kozmoai/plugin-kubernetes-common@0.6.4-next.1

## 0.2.1-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.19.0-next.1
  - @kozmoai/integration@1.5.0-next.0
  - @kozmoai/errors@1.2.0-next.0
  - @kozmoai/backend-plugin-api@0.5.3-next.1
  - @kozmoai/catalog-model@1.4.0-next.0
  - @kozmoai/backend-tasks@0.5.3-next.1
  - @kozmoai/plugin-catalog-node@1.3.7-next.1
  - @kozmoai/integration-aws-node@0.1.4-next.0
  - @kozmoai/plugin-catalog-common@1.0.14-next.0
  - @kozmoai/plugin-kubernetes-common@0.6.4-next.0
  - @kozmoai/config@1.0.7
  - @kozmoai/types@1.0.2

## 0.2.1-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-node@1.3.7-next.0
  - @kozmoai/backend-common@0.18.6-next.0
  - @kozmoai/integration@1.4.5
  - @kozmoai/integration-aws-node@0.1.3
  - @kozmoai/config@1.0.7
  - @kozmoai/backend-plugin-api@0.5.3-next.0
  - @kozmoai/backend-tasks@0.5.3-next.0
  - @kozmoai/catalog-model@1.3.0
  - @kozmoai/errors@1.1.5
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-catalog-common@1.0.13
  - @kozmoai/plugin-kubernetes-common@0.6.3

## 0.2.0

### Minor Changes

- 1a3b5f1e390: **BREAKING**: AwsOrganizationCloudAccountProcessor.fromConfig now returns a promise instead of the instance directly.

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.18.5
  - @kozmoai/integration@1.4.5
  - @kozmoai/integration-aws-node@0.1.3
  - @kozmoai/plugin-kubernetes-common@0.6.3
  - @kozmoai/backend-tasks@0.5.2
  - @kozmoai/plugin-catalog-node@1.3.6
  - @kozmoai/backend-plugin-api@0.5.2
  - @kozmoai/catalog-model@1.3.0
  - @kozmoai/config@1.0.7
  - @kozmoai/errors@1.1.5
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-catalog-common@1.0.13

## 0.1.19-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-kubernetes-common@0.6.3-next.0
  - @kozmoai/config@1.0.7

## 0.1.19-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.18.5-next.1
  - @kozmoai/backend-tasks@0.5.2-next.1
  - @kozmoai/plugin-catalog-node@1.3.6-next.1
  - @kozmoai/backend-plugin-api@0.5.2-next.1
  - @kozmoai/config@1.0.7

## 0.1.19-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.18.5-next.0
  - @kozmoai/integration@1.4.5-next.0
  - @kozmoai/backend-tasks@0.5.2-next.0
  - @kozmoai/plugin-catalog-node@1.3.6-next.0
  - @kozmoai/backend-plugin-api@0.5.2-next.0
  - @kozmoai/catalog-model@1.3.0
  - @kozmoai/config@1.0.7
  - @kozmoai/errors@1.1.5
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-catalog-common@1.0.13
  - @kozmoai/plugin-kubernetes-common@0.6.2

## 0.1.18

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.18.4
  - @kozmoai/backend-tasks@0.5.1
  - @kozmoai/catalog-model@1.3.0
  - @kozmoai/plugin-kubernetes-common@0.6.2
  - @kozmoai/integration@1.4.4
  - @kozmoai/plugin-catalog-node@1.3.5
  - @kozmoai/backend-plugin-api@0.5.1
  - @kozmoai/config@1.0.7
  - @kozmoai/errors@1.1.5
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-catalog-common@1.0.13

## 0.1.18-next.3

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-model@1.3.0-next.0
  - @kozmoai/backend-common@0.18.4-next.2
  - @kozmoai/backend-plugin-api@0.5.1-next.2
  - @kozmoai/backend-tasks@0.5.1-next.2
  - @kozmoai/config@1.0.7
  - @kozmoai/errors@1.1.5
  - @kozmoai/integration@1.4.4-next.0
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-catalog-common@1.0.13-next.1
  - @kozmoai/plugin-catalog-node@1.3.5-next.3
  - @kozmoai/plugin-kubernetes-common@0.6.2-next.2

## 0.1.18-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.18.4-next.2
  - @kozmoai/backend-plugin-api@0.5.1-next.2
  - @kozmoai/backend-tasks@0.5.1-next.2
  - @kozmoai/catalog-model@1.2.1
  - @kozmoai/config@1.0.7
  - @kozmoai/errors@1.1.5
  - @kozmoai/integration@1.4.4-next.0
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-catalog-common@1.0.13-next.0
  - @kozmoai/plugin-catalog-node@1.3.5-next.2
  - @kozmoai/plugin-kubernetes-common@0.6.2-next.1

## 0.1.18-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-tasks@0.5.1-next.1
  - @kozmoai/integration@1.4.4-next.0
  - @kozmoai/backend-common@0.18.4-next.1
  - @kozmoai/backend-plugin-api@0.5.1-next.1
  - @kozmoai/catalog-model@1.2.1
  - @kozmoai/config@1.0.7
  - @kozmoai/errors@1.1.5
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-catalog-common@1.0.13-next.0
  - @kozmoai/plugin-catalog-node@1.3.5-next.1
  - @kozmoai/plugin-kubernetes-common@0.6.2-next.1

## 0.1.18-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.18.4-next.0
  - @kozmoai/plugin-kubernetes-common@0.6.2-next.0
  - @kozmoai/config@1.0.7
  - @kozmoai/integration@1.4.3
  - @kozmoai/backend-plugin-api@0.5.1-next.0
  - @kozmoai/backend-tasks@0.5.1-next.0
  - @kozmoai/catalog-model@1.2.1
  - @kozmoai/errors@1.1.5
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-catalog-common@1.0.12
  - @kozmoai/plugin-catalog-node@1.3.5-next.0

## 0.1.17

### Patch Changes

- 90469c02c8c: Renamed `awsS3EntityProviderCatalogModule` to `catalogModuleAwsS3EntityProviders` to match the [recommended naming patterns](https://glint.io/docs/backend-system/architecture/naming-patterns).
- e675f902980: Make sure to not use deprecated exports from `@kozmoai/plugin-catalog-backend`
- 928a12a9b3e: Internal refactor of `/alpha` exports.
- 87f0bbec175: AwsS3UrlReader upgraded to use aws-sdk v3
- bf611cf019a: Fix missing `dependencies` in `package.json`
- Updated dependencies
  - @kozmoai/backend-tasks@0.5.0
  - @kozmoai/backend-common@0.18.3
  - @kozmoai/errors@1.1.5
  - @kozmoai/plugin-catalog-node@1.3.4
  - @kozmoai/backend-plugin-api@0.5.0
  - @kozmoai/catalog-model@1.2.1
  - @kozmoai/plugin-catalog-common@1.0.12
  - @kozmoai/integration@1.4.3
  - @kozmoai/config@1.0.7
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-kubernetes-common@0.6.1

## 0.1.17-next.2

### Patch Changes

- 87f0bbec175: AwsS3UrlReader upgraded to use aws-sdk v3
- Updated dependencies
  - @kozmoai/backend-tasks@0.5.0-next.2
  - @kozmoai/backend-common@0.18.3-next.2
  - @kozmoai/backend-plugin-api@0.4.1-next.2
  - @kozmoai/plugin-catalog-backend@1.8.0-next.2
  - @kozmoai/plugin-catalog-node@1.3.4-next.2
  - @kozmoai/config@1.0.7-next.0
  - @kozmoai/integration@1.4.3-next.0

## 0.1.17-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/errors@1.1.5-next.0
  - @kozmoai/backend-common@0.18.3-next.1
  - @kozmoai/integration@1.4.3-next.0
  - @kozmoai/plugin-catalog-backend@1.8.0-next.1
  - @kozmoai/backend-plugin-api@0.4.1-next.1
  - @kozmoai/backend-tasks@0.4.4-next.1
  - @kozmoai/config@1.0.7-next.0
  - @kozmoai/catalog-model@1.2.1-next.1
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-catalog-common@1.0.12-next.1
  - @kozmoai/plugin-catalog-node@1.3.4-next.1
  - @kozmoai/plugin-kubernetes-common@0.6.1-next.1

## 0.1.17-next.0

### Patch Changes

- 928a12a9b3: Internal refactor of `/alpha` exports.
- bf611cf019: Fix missing `dependencies` in `package.json`
- Updated dependencies
  - @kozmoai/plugin-catalog-backend@1.8.0-next.0
  - @kozmoai/backend-tasks@0.4.4-next.0
  - @kozmoai/backend-plugin-api@0.4.1-next.0
  - @kozmoai/backend-common@0.18.3-next.0
  - @kozmoai/catalog-model@1.2.1-next.0
  - @kozmoai/plugin-catalog-common@1.0.12-next.0
  - @kozmoai/plugin-catalog-node@1.3.4-next.0
  - @kozmoai/config@1.0.6
  - @kozmoai/errors@1.1.4
  - @kozmoai/integration@1.4.2
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-kubernetes-common@0.6.1-next.0

## 0.1.15

### Patch Changes

- 671c6af700: Update to import `LocationSpec` from the correct package.
- 8e025f1347: Added support for `externalId` when assuming role in `AwsS3EntityProvider`
- Updated dependencies
  - @kozmoai/plugin-catalog-backend@1.7.2
  - @kozmoai/backend-plugin-api@0.4.0
  - @kozmoai/backend-common@0.18.2
  - @kozmoai/catalog-model@1.2.0
  - @kozmoai/plugin-catalog-node@1.3.3
  - @kozmoai/backend-tasks@0.4.3
  - @kozmoai/config@1.0.6
  - @kozmoai/errors@1.1.4
  - @kozmoai/integration@1.4.2
  - @kozmoai/types@1.0.2

## 0.1.15-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.4.0-next.2
  - @kozmoai/backend-common@0.18.2-next.2
  - @kozmoai/plugin-catalog-backend@1.7.2-next.2
  - @kozmoai/catalog-model@1.2.0-next.1
  - @kozmoai/plugin-catalog-node@1.3.3-next.2
  - @kozmoai/backend-tasks@0.4.3-next.2
  - @kozmoai/config@1.0.6
  - @kozmoai/errors@1.1.4
  - @kozmoai/integration@1.4.2
  - @kozmoai/types@1.0.2

## 0.1.15-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-backend@1.7.2-next.1
  - @kozmoai/backend-common@0.18.2-next.1
  - @kozmoai/backend-plugin-api@0.3.2-next.1
  - @kozmoai/backend-tasks@0.4.3-next.1
  - @kozmoai/catalog-model@1.1.6-next.0
  - @kozmoai/config@1.0.6
  - @kozmoai/errors@1.1.4
  - @kozmoai/integration@1.4.2
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-catalog-node@1.3.3-next.1

## 0.1.15-next.0

### Patch Changes

- 8e025f1347: Added support for `externalId` when assuming role in `AwsS3EntityProvider`
- Updated dependencies
  - @kozmoai/catalog-model@1.1.6-next.0
  - @kozmoai/backend-common@0.18.2-next.0
  - @kozmoai/plugin-catalog-backend@1.7.2-next.0
  - @kozmoai/plugin-catalog-node@1.3.3-next.0
  - @kozmoai/backend-tasks@0.4.3-next.0
  - @kozmoai/backend-plugin-api@0.3.2-next.0

## 0.1.13

### Patch Changes

- 9f2b786fc9: Provide context for logged errors.
- 8e06f3cf00: Switched imports of `loggerToWinstonLogger` to `@kozmoai/backend-common`.
- Updated dependencies
  - @kozmoai/backend-plugin-api@0.3.0
  - @kozmoai/backend-common@0.18.0
  - @kozmoai/catalog-model@1.1.5
  - @kozmoai/backend-tasks@0.4.1
  - @kozmoai/plugin-catalog-node@1.3.1
  - @kozmoai/plugin-catalog-backend@1.7.0
  - @kozmoai/config@1.0.6
  - @kozmoai/errors@1.1.4
  - @kozmoai/integration@1.4.2
  - @kozmoai/types@1.0.2

## 0.1.13-next.2

### Patch Changes

- 9f2b786fc9: Provide context for logged errors.
- 8e06f3cf00: Switched imports of `loggerToWinstonLogger` to `@kozmoai/backend-common`.
- Updated dependencies
  - @kozmoai/backend-plugin-api@0.3.0-next.1
  - @kozmoai/backend-common@0.18.0-next.1
  - @kozmoai/backend-tasks@0.4.1-next.1
  - @kozmoai/plugin-catalog-backend@1.7.0-next.2
  - @kozmoai/plugin-catalog-node@1.3.1-next.2
  - @kozmoai/catalog-model@1.1.5-next.1
  - @kozmoai/config@1.0.6-next.0
  - @kozmoai/errors@1.1.4
  - @kozmoai/integration@1.4.2-next.0
  - @kozmoai/types@1.0.2

## 0.1.13-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.2.1-next.0
  - @kozmoai/backend-common@0.18.0-next.0
  - @kozmoai/config@1.0.6-next.0
  - @kozmoai/plugin-catalog-backend@1.7.0-next.1
  - @kozmoai/plugin-catalog-node@1.3.1-next.1
  - @kozmoai/backend-tasks@0.4.1-next.0
  - @kozmoai/catalog-model@1.1.5-next.1
  - @kozmoai/errors@1.1.4
  - @kozmoai/integration@1.4.2-next.0
  - @kozmoai/types@1.0.2

## 0.1.13-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-model@1.1.5-next.0
  - @kozmoai/plugin-catalog-backend@1.7.0-next.0
  - @kozmoai/backend-common@0.17.0
  - @kozmoai/backend-plugin-api@0.2.0
  - @kozmoai/backend-tasks@0.4.0
  - @kozmoai/config@1.0.5
  - @kozmoai/errors@1.1.4
  - @kozmoai/integration@1.4.1
  - @kozmoai/types@1.0.2
  - @kozmoai/plugin-catalog-node@1.3.1-next.0

## 0.1.12

### Patch Changes

- 884d749b14: Refactored to use `coreServices` from `@kozmoai/backend-plugin-api`.
- Updated dependencies
  - @kozmoai/plugin-catalog-backend@1.6.0
  - @kozmoai/backend-common@0.17.0
  - @kozmoai/plugin-catalog-node@1.3.0
  - @kozmoai/backend-tasks@0.4.0
  - @kozmoai/errors@1.1.4
  - @kozmoai/backend-plugin-api@0.2.0
  - @kozmoai/integration@1.4.1
  - @kozmoai/types@1.0.2
  - @kozmoai/catalog-model@1.1.4
  - @kozmoai/config@1.0.5

## 0.1.12-next.3

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-backend@1.6.0-next.3
  - @kozmoai/backend-tasks@0.4.0-next.3
  - @kozmoai/backend-common@0.17.0-next.3
  - @kozmoai/backend-plugin-api@0.2.0-next.3
  - @kozmoai/catalog-model@1.1.4-next.1
  - @kozmoai/config@1.0.5-next.1
  - @kozmoai/errors@1.1.4-next.1
  - @kozmoai/integration@1.4.1-next.1
  - @kozmoai/types@1.0.2-next.1
  - @kozmoai/plugin-catalog-node@1.3.0-next.3

## 0.1.12-next.2

### Patch Changes

- 884d749b14: Refactored to use `coreServices` from `@kozmoai/backend-plugin-api`.
- Updated dependencies
  - @kozmoai/plugin-catalog-backend@1.6.0-next.2
  - @kozmoai/plugin-catalog-node@1.3.0-next.2
  - @kozmoai/backend-common@0.17.0-next.2
  - @kozmoai/backend-plugin-api@0.2.0-next.2
  - @kozmoai/backend-tasks@0.4.0-next.2
  - @kozmoai/catalog-model@1.1.4-next.1
  - @kozmoai/config@1.0.5-next.1
  - @kozmoai/errors@1.1.4-next.1
  - @kozmoai/integration@1.4.1-next.1
  - @kozmoai/types@1.0.2-next.1

## 0.1.12-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.17.0-next.1
  - @kozmoai/plugin-catalog-backend@1.6.0-next.1
  - @kozmoai/backend-tasks@0.4.0-next.1
  - @kozmoai/types@1.0.2-next.1
  - @kozmoai/backend-plugin-api@0.1.5-next.1
  - @kozmoai/plugin-catalog-node@1.2.2-next.1
  - @kozmoai/config@1.0.5-next.1
  - @kozmoai/integration@1.4.1-next.1
  - @kozmoai/catalog-model@1.1.4-next.1
  - @kozmoai/errors@1.1.4-next.1

## 0.1.12-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-backend@1.6.0-next.0
  - @kozmoai/backend-common@0.16.1-next.0
  - @kozmoai/integration@1.4.1-next.0
  - @kozmoai/types@1.0.2-next.0
  - @kozmoai/backend-plugin-api@0.1.5-next.0
  - @kozmoai/plugin-catalog-node@1.2.2-next.0
  - @kozmoai/backend-tasks@0.3.8-next.0
  - @kozmoai/catalog-model@1.1.4-next.0
  - @kozmoai/config@1.0.5-next.0
  - @kozmoai/errors@1.1.4-next.0

## 0.1.11

### Patch Changes

- bae3617be5: `AwsS3EntityProvider`: Add option to configure schedule via `app-config.yaml` instead of in code.

  Please find how to configure the schedule at the config at
  https://glint.io/docs/integrations/aws-s3/discovery

- defb389ecd: Add `awsS3EntityProviderCatalogModule` (new backend-plugin-api, alpha).
- a6d779d58a: Remove explicit default visibility at `config.d.ts` files.

  ```ts
  /**
   * @visibility backend
   */
  ```

- Updated dependencies
  - @kozmoai/backend-common@0.16.0
  - @kozmoai/plugin-catalog-backend@1.5.1
  - @kozmoai/integration@1.4.0
  - @kozmoai/backend-tasks@0.3.7
  - @kozmoai/catalog-model@1.1.3
  - @kozmoai/types@1.0.1
  - @kozmoai/backend-plugin-api@0.1.4
  - @kozmoai/plugin-catalog-node@1.2.1
  - @kozmoai/config@1.0.4
  - @kozmoai/errors@1.1.3

## 0.1.11-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.16.0-next.1
  - @kozmoai/backend-plugin-api@0.1.4-next.1
  - @kozmoai/backend-tasks@0.3.7-next.1
  - @kozmoai/plugin-catalog-backend@1.5.1-next.1
  - @kozmoai/plugin-catalog-node@1.2.1-next.1
  - @kozmoai/catalog-model@1.1.3-next.0
  - @kozmoai/config@1.0.4-next.0
  - @kozmoai/errors@1.1.3-next.0
  - @kozmoai/integration@1.4.0-next.0
  - @kozmoai/types@1.0.1-next.0

## 0.1.11-next.0

### Patch Changes

- bae3617be5: `AwsS3EntityProvider`: Add option to configure schedule via `app-config.yaml` instead of in code.

  Please find how to configure the schedule at the config at
  https://glint.io/docs/integrations/aws-s3/discovery

- defb389ecd: Add `awsS3EntityProviderCatalogModule` (new backend-plugin-api, alpha).
- a6d779d58a: Remove explicit default visibility at `config.d.ts` files.

  ```ts
  /**
   * @visibility backend
   */
  ```

- Updated dependencies
  - @kozmoai/backend-common@0.16.0-next.0
  - @kozmoai/plugin-catalog-backend@1.5.1-next.0
  - @kozmoai/integration@1.4.0-next.0
  - @kozmoai/backend-tasks@0.3.7-next.0
  - @kozmoai/catalog-model@1.1.3-next.0
  - @kozmoai/types@1.0.1-next.0
  - @kozmoai/backend-plugin-api@0.1.4-next.0
  - @kozmoai/plugin-catalog-node@1.2.1-next.0
  - @kozmoai/config@1.0.4-next.0
  - @kozmoai/errors@1.1.3-next.0

## 0.1.10

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-model@1.1.2
  - @kozmoai/backend-common@0.15.2
  - @kozmoai/plugin-catalog-backend@1.5.0
  - @kozmoai/backend-tasks@0.3.6
  - @kozmoai/config@1.0.3
  - @kozmoai/errors@1.1.2
  - @kozmoai/integration@1.3.2
  - @kozmoai/types@1.0.0

## 0.1.10-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-backend@1.5.0-next.2
  - @kozmoai/backend-tasks@0.3.6-next.2
  - @kozmoai/backend-common@0.15.2-next.2
  - @kozmoai/catalog-model@1.1.2-next.2
  - @kozmoai/config@1.0.3-next.2
  - @kozmoai/errors@1.1.2-next.2
  - @kozmoai/integration@1.3.2-next.2
  - @kozmoai/types@1.0.0

## 0.1.10-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.15.2-next.1
  - @kozmoai/backend-tasks@0.3.6-next.1
  - @kozmoai/catalog-model@1.1.2-next.1
  - @kozmoai/config@1.0.3-next.1
  - @kozmoai/errors@1.1.2-next.1
  - @kozmoai/integration@1.3.2-next.1
  - @kozmoai/types@1.0.0
  - @kozmoai/plugin-catalog-backend@1.4.1-next.1

## 0.1.10-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-model@1.1.2-next.0
  - @kozmoai/plugin-catalog-backend@1.4.1-next.0
  - @kozmoai/backend-common@0.15.2-next.0
  - @kozmoai/backend-tasks@0.3.6-next.0
  - @kozmoai/config@1.0.3-next.0
  - @kozmoai/errors@1.1.2-next.0
  - @kozmoai/integration@1.3.2-next.0
  - @kozmoai/types@1.0.0

## 0.1.9

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.15.1
  - @kozmoai/integration@1.3.1
  - @kozmoai/plugin-catalog-backend@1.4.0
  - @kozmoai/backend-tasks@0.3.5
  - @kozmoai/catalog-model@1.1.1
  - @kozmoai/config@1.0.2
  - @kozmoai/errors@1.1.1

## 0.1.9-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-model@1.1.1-next.0
  - @kozmoai/config@1.0.2-next.0
  - @kozmoai/errors@1.1.1-next.0
  - @kozmoai/integration@1.3.1-next.2
  - @kozmoai/plugin-catalog-backend@1.4.0-next.3
  - @kozmoai/backend-common@0.15.1-next.3
  - @kozmoai/backend-tasks@0.3.5-next.1

## 0.1.9-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.15.1-next.1
  - @kozmoai/plugin-catalog-backend@1.4.0-next.1

## 0.1.9-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.15.1-next.0
  - @kozmoai/backend-tasks@0.3.5-next.0
  - @kozmoai/plugin-catalog-backend@1.3.2-next.0
  - @kozmoai/integration@1.3.1-next.0

## 0.1.8

### Patch Changes

- 17d45dbf10: Deprecate `AwsS3DiscoveryProcessor` in favor of `AwsS3EntityProvider` (since v0.1.4).

  You can find a migration guide at
  [the release notes for v0.1.4](https://github.com/kozmoai/glint/blob/master/plugins/catalog-backend-module-aws/CHANGELOG.md#014).

- Updated dependencies
  - @kozmoai/backend-common@0.15.0
  - @kozmoai/integration@1.3.0
  - @kozmoai/backend-tasks@0.3.4
  - @kozmoai/plugin-catalog-backend@1.3.1

## 0.1.8-next.0

### Patch Changes

- 17d45dbf10: Deprecate `AwsS3DiscoveryProcessor` in favor of `AwsS3EntityProvider` (since v0.1.4).

  You can find a migration guide at
  [the release notes for v0.1.4](https://github.com/kozmoai/glint/blob/master/plugins/catalog-backend-module-aws/CHANGELOG.md#014).

- Updated dependencies
  - @kozmoai/backend-common@0.15.0-next.0
  - @kozmoai/integration@1.3.0-next.0
  - @kozmoai/backend-tasks@0.3.4-next.0
  - @kozmoai/plugin-catalog-backend@1.3.1-next.0

## 0.1.7

### Patch Changes

- f9f1de8100: Add processor for ingesting EKS clusters into the catalog
- 72622d9143: Updated dependency `yaml` to `^2.0.0`.
- Updated dependencies
  - @kozmoai/plugin-catalog-backend@1.3.0
  - @kozmoai/backend-common@0.14.1
  - @kozmoai/catalog-model@1.1.0
  - @kozmoai/integration@1.2.2
  - @kozmoai/backend-tasks@0.3.3
  - @kozmoai/errors@1.1.0

## 0.1.7-next.2

### Patch Changes

- 72622d9143: Updated dependency `yaml` to `^2.0.0`.
- Updated dependencies
  - @kozmoai/plugin-catalog-backend@1.3.0-next.3
  - @kozmoai/backend-common@0.14.1-next.3
  - @kozmoai/integration@1.2.2-next.3
  - @kozmoai/backend-tasks@0.3.3-next.3
  - @kozmoai/catalog-model@1.1.0-next.3

## 0.1.7-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-model@1.1.0-next.1
  - @kozmoai/backend-common@0.14.1-next.1
  - @kozmoai/errors@1.1.0-next.0
  - @kozmoai/plugin-catalog-backend@1.2.1-next.1
  - @kozmoai/backend-tasks@0.3.3-next.1
  - @kozmoai/integration@1.2.2-next.1

## 0.1.7-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.14.1-next.0
  - @kozmoai/catalog-model@1.1.0-next.0
  - @kozmoai/integration@1.2.2-next.0
  - @kozmoai/backend-tasks@0.3.3-next.0
  - @kozmoai/plugin-catalog-backend@1.2.1-next.0

## 0.1.6

### Patch Changes

- eb2544b21b: Inline config interfaces
- Updated dependencies
  - @kozmoai/plugin-catalog-backend@1.2.0
  - @kozmoai/backend-tasks@0.3.2
  - @kozmoai/backend-common@0.14.0
  - @kozmoai/integration@1.2.1
  - @kozmoai/catalog-model@1.0.3

## 0.1.6-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.14.0-next.2
  - @kozmoai/integration@1.2.1-next.2
  - @kozmoai/backend-tasks@0.3.2-next.2
  - @kozmoai/plugin-catalog-backend@1.2.0-next.2

## 0.1.6-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-tasks@0.3.2-next.1
  - @kozmoai/backend-common@0.13.6-next.1
  - @kozmoai/integration@1.2.1-next.1
  - @kozmoai/plugin-catalog-backend@1.2.0-next.1
  - @kozmoai/catalog-model@1.0.3-next.0

## 0.1.6-next.0

### Patch Changes

- eb2544b21b: Inline config interfaces
- Updated dependencies
  - @kozmoai/backend-tasks@0.3.2-next.0
  - @kozmoai/backend-common@0.13.6-next.0
  - @kozmoai/integration@1.2.1-next.0
  - @kozmoai/plugin-catalog-backend@1.2.0-next.0

## 0.1.5

### Patch Changes

- bffec1c96a: Fix S3 object URL creation at AwsS3EntityProvider by

  - handle absence of region config,
  - handle regions with region-less URIs (us-east-1),
  - apply URI encoding,
  - and simplify the logic overall.

- Updated dependencies
  - @kozmoai/backend-common@0.13.3
  - @kozmoai/plugin-catalog-backend@1.1.2
  - @kozmoai/backend-tasks@0.3.1
  - @kozmoai/integration@1.2.0
  - @kozmoai/config@1.0.1
  - @kozmoai/catalog-model@1.0.2

## 0.1.5-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-common@0.13.3-next.2
  - @kozmoai/plugin-catalog-backend@1.1.2-next.2
  - @kozmoai/backend-tasks@0.3.1-next.1
  - @kozmoai/config@1.0.1-next.0
  - @kozmoai/catalog-model@1.0.2-next.0
  - @kozmoai/integration@1.2.0-next.1

## 0.1.5-next.0

### Patch Changes

- bffec1c96a: Fix S3 object URL creation at AwsS3EntityProvider by

  - handle absence of region config,
  - handle regions with region-less URIs (us-east-1),
  - apply URI encoding,
  - and simplify the logic overall.

- Updated dependencies
  - @kozmoai/backend-common@0.13.3-next.0
  - @kozmoai/integration@1.2.0-next.0
  - @kozmoai/plugin-catalog-backend@1.1.2-next.0
  - @kozmoai/backend-tasks@0.3.1-next.0

## 0.1.4

### Patch Changes

- 5969c4b65c: Add a new provider `AwsS3EntityProvider` as replacement for `AwsS3DiscoveryProcessor`.

  In order to migrate from the `AwsS3DiscoveryProcessor` you need to apply
  the following changes:

  **Before:**

  ```yaml
  # app-config.yaml

  catalog:
    locations:
      - type: s3-discovery
        target: https://sample-bucket.s3.us-east-2.amazonaws.com/prefix/
  ```

  ```ts
  /* packages/backend/src/plugins/catalog.ts */

  import { AwsS3DiscoveryProcessor } from '@kozmoai/plugin-catalog-backend-module-aws';

  const builder = await CatalogBuilder.create(env);
  /** ... other processors ... */
  builder.addProcessor(new AwsS3DiscoveryProcessor(env.reader));
  ```

  **After:**

  ```yaml
  # app-config.yaml

  catalog:
    providers:
      awsS3:
        yourProviderId: # identifies your dataset / provider independent of config changes
          bucketName: sample-bucket
          prefix: prefix/ # optional
          region: us-east-2 # optional, uses the default region otherwise
  ```

  ```ts
  /* packages/backend/src/plugins/catalog.ts */

  import { AwsS3EntityProvider } from '@kozmoai/plugin-catalog-backend-module-aws';

  const builder = await CatalogBuilder.create(env);
  /** ... other processors and/or providers ... */
  builder.addEntityProvider(
    ...AwsS3EntityProvider.fromConfig(env.config, {
      logger: env.logger,
      schedule: env.scheduler.createScheduledTaskRunner({
        frequency: Duration.fromObject({ minutes: 30 }),
        timeout: Duration.fromObject({ minutes: 3 }),
      }),
    }),
  );
  ```

  For simple setups, you can omit the provider ID at the config
  which has the same effect as using `default` for it.

  ```yaml
  # app-config.yaml

  catalog:
    providers:
      awsS3:
        # uses "default" as provider ID
        bucketName: sample-bucket
        prefix: prefix/ # optional
        region: us-east-2 # optional, uses the default region otherwise
  ```

- 776a91ea3a: Corrected title and URL to setup documentation in README
- Updated dependencies
  - @kozmoai/plugin-catalog-backend@1.1.0
  - @kozmoai/integration@1.1.0
  - @kozmoai/backend-tasks@0.3.0
  - @kozmoai/catalog-model@1.0.1
  - @kozmoai/backend-common@0.13.2

## 0.1.4-next.2

### Patch Changes

- 5969c4b65c: Add a new provider `AwsS3EntityProvider` as replacement for `AwsS3DiscoveryProcessor`.

  In order to migrate from the `AwsS3DiscoveryProcessor` you need to apply
  the following changes:

  **Before:**

  ```yaml
  # app-config.yaml

  catalog:
    locations:
      - type: s3-discovery
        target: https://sample-bucket.s3.us-east-2.amazonaws.com/prefix/
  ```

  ```ts
  /* packages/backend/src/plugins/catalog.ts */

  import { AwsS3DiscoveryProcessor } from '@kozmoai/plugin-catalog-backend-module-aws';

  const builder = await CatalogBuilder.create(env);
  /** ... other processors ... */
  builder.addProcessor(new AwsS3DiscoveryProcessor(env.reader));
  ```

  **After:**

  ```yaml
  # app-config.yaml

  catalog:
    providers:
      awsS3:
        yourProviderId: # identifies your dataset / provider independent of config changes
          bucketName: sample-bucket
          prefix: prefix/ # optional
          region: us-east-2 # optional, uses the default region otherwise
  ```

  ```ts
  /* packages/backend/src/plugins/catalog.ts */

  import { AwsS3EntityProvider } from '@kozmoai/plugin-catalog-backend-module-aws';

  const builder = await CatalogBuilder.create(env);
  /** ... other processors and/or providers ... */
  builder.addEntityProvider(
    ...AwsS3EntityProvider.fromConfig(env.config, {
      logger: env.logger,
      schedule: env.scheduler.createScheduledTaskRunner({
        frequency: Duration.fromObject({ minutes: 30 }),
        timeout: Duration.fromObject({ minutes: 3 }),
      }),
    }),
  );
  ```

  For simple setups, you can omit the provider ID at the config
  which has the same effect as using `default` for it.

  ```yaml
  # app-config.yaml

  catalog:
    providers:
      awsS3:
        # uses "default" as provider ID
        bucketName: sample-bucket
        prefix: prefix/ # optional
        region: us-east-2 # optional, uses the default region otherwise
  ```

- 776a91ea3a: Corrected title and URL to setup documentation in README
- Updated dependencies
  - @kozmoai/plugin-catalog-backend@1.1.0-next.3
  - @kozmoai/backend-common@0.13.2-next.2
  - @kozmoai/integration@1.1.0-next.2

## 0.1.4-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-backend@1.1.0-next.1
  - @kozmoai/backend-common@0.13.2-next.1

## 0.1.4-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-model@1.0.1-next.0
  - @kozmoai/plugin-catalog-backend@1.0.1-next.0
  - @kozmoai/backend-common@0.13.2-next.0

## 0.1.3

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-backend@1.0.0
  - @kozmoai/backend-common@0.13.1
  - @kozmoai/catalog-model@1.0.0
  - @kozmoai/config@1.0.0
  - @kozmoai/errors@1.0.0
  - @kozmoai/types@1.0.0

## 0.1.2

### Patch Changes

- f115a7f8fd: Added `AwsS3DiscoveryProcessor`, which was moved here from `@kozmoai/plugin-catalog-backend` where it previously resided.
- Updated dependencies
  - @kozmoai/backend-common@0.13.0
  - @kozmoai/plugin-catalog-backend@0.24.0
  - @kozmoai/catalog-model@0.13.0

## 0.1.2-next.0

### Patch Changes

- f115a7f8fd: Added `AwsS3DiscoveryProcessor`, which was moved here from `@kozmoai/plugin-catalog-backend` where it previously resided.
- Updated dependencies
  - @kozmoai/backend-common@0.13.0-next.0
  - @kozmoai/plugin-catalog-backend@0.24.0-next.0
  - @kozmoai/catalog-model@0.13.0-next.0

## 0.1.1

### Patch Changes

- 83a83381b0: Use the new `processingResult` export from the catalog backend
- Updated dependencies
  - @kozmoai/catalog-model@0.12.0
  - @kozmoai/plugin-catalog-backend@0.23.0

## 0.1.0

### Minor Changes

- 25e97e7242: Added this new catalog module, initially containing only the
  `AwsOrganizationCloudAccountProcessor`.

  Note that this was moved over from the catalog backend itself, and therefore is
  no longer part of its builtin set of processors. If you were using this
  processor, through making use of the location type `aws-cloud-accounts` and/or
  using the configuration key `catalog.processors.awsOrganization`, you will from
  now on have to add the processor manually to your catalog.

  First, add the `@kozmoai/plugin-catalog-backend-module-aws` dependency to your
  `packages/backend` package.

  Then, in `packages/backend/src/plugins/catalog.ts`:

  ```diff
  +import { AwsOrganizationCloudAccountProcessor } from '@kozmoai/plugin-catalog-backend-module-aws';

   export default async function createPlugin(
     env: PluginEnvironment,
   ): Promise<Router> {
     const builder = await CatalogBuilder.create(env);
  +  builder.addProcessor(
  +    AwsOrganizationCloudAccountProcessor.fromConfig(
  +      env.config,
  +      { logger: env.logger }
  +    )
  +  );
     // ...
  ```

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-catalog-backend@0.22.0
  - @kozmoai/catalog-model@0.11.0