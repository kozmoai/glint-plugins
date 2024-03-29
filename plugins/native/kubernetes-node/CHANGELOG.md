# @kozmoai/plugin-kubernetes-node

## 0.1.8-next.1

### Patch Changes

- 69d0217: Accept auth credentials to get kubernetes clusters
- Updated dependencies
  - @kozmoai/backend-plugin-api@0.6.14-next.1
  - @kozmoai/catalog-model@1.4.5-next.0
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-kubernetes-common@0.7.5-next.1

## 0.1.7-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.6.13-next.0
  - @kozmoai/plugin-kubernetes-common@0.7.5-next.0
  - @kozmoai/catalog-model@1.4.5-next.0
  - @kozmoai/types@1.1.1

## 0.1.4

### Patch Changes

- a775596: Enabled a way to include custom auth metadata info on the clusters endpoint. If you want to implement a Kubernetes auth strategy which requires surfacing custom auth metadata to the frontend, use the new presentAuthMetadata method on the AuthenticationStrategy interface.
- 8472188: Added or fixed the `repository` field in `package.json`.
- 043cf88: The `ClusterDetails` type now has a `title` field, which should be a
  human-readable name.
- cceed8a: Introduced `PinnipedHelper` class to enable authentication to Kubernetes clusters through Pinniped
- f180cba: Enabling authentication to kubernetes clusters with mTLS x509 client certs
- Updated dependencies
  - @kozmoai/plugin-kubernetes-common@0.7.4
  - @kozmoai/backend-plugin-api@0.6.10
  - @kozmoai/catalog-model@1.4.4
  - @kozmoai/types@1.1.1

## 0.1.4-next.3

### Patch Changes

- 8472188: Added or fixed the `repository` field in `package.json`.
- 043cf88: The `ClusterDetails` type now has a `title` field, which should be a
  human-readable name.
- Updated dependencies
  - @kozmoai/plugin-kubernetes-common@0.7.4-next.2
  - @kozmoai/backend-plugin-api@0.6.10-next.3
  - @kozmoai/catalog-model@1.4.4-next.0
  - @kozmoai/types@1.1.1

## 0.1.4-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.6.10-next.2
  - @kozmoai/catalog-model@1.4.4-next.0
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-kubernetes-common@0.7.4-next.1

## 0.1.4-next.1

### Patch Changes

- cceed8a: Introduced `PinnipedHelper` class to enable authentication to Kubernetes clusters through Pinniped
- Updated dependencies
  - @kozmoai/catalog-model@1.4.4-next.0
  - @kozmoai/backend-plugin-api@0.6.10-next.1
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-kubernetes-common@0.7.4-next.1

## 0.1.4-next.0

### Patch Changes

- a775596: Enabled a way to include custom auth metadata info on the clusters endpoint. If you want to implement a Kubernetes auth strategy which requires surfacing custom auth metadata to the frontend, use the new presentAuthMetadata method on the AuthenticationStrategy interface.
- f180cba: Enabling authentication to kubernetes clusters with mTLS x509 client certs
- Updated dependencies
  - @kozmoai/plugin-kubernetes-common@0.7.4-next.0
  - @kozmoai/backend-plugin-api@0.6.10-next.0
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/types@1.1.1

## 0.1.3

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.6.9
  - @kozmoai/plugin-kubernetes-common@0.7.3
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/types@1.1.1

## 0.1.3-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.6.9-next.2

## 0.1.3-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.6.9-next.1
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/types@1.1.1
  - @kozmoai/plugin-kubernetes-common@0.7.3-next.0

## 0.1.3-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-kubernetes-common@0.7.3-next.0
  - @kozmoai/backend-plugin-api@0.6.9-next.0
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/types@1.1.1

## 0.1.2

### Patch Changes

- 6010564: The `kubernetes-node` plugin has been modified to house a new extension points for Kubernetes backend plugin;
  `KubernetesClusterSupplierExtensionPoint` is introduced .
  `kubernetesAuthStrategyExtensionPoint` is introduced .
  `kubernetesFetcherExtensionPoint` is introduced .
  `kubernetesServiceLocatorExtensionPoint` is introduced .

  The `kubernetes-backend` plugin was modified to use this new extension point.

- Updated dependencies
  - @kozmoai/plugin-kubernetes-common@0.7.2
  - @kozmoai/backend-plugin-api@0.6.8
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/types@1.1.1

## 0.1.2-next.3

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.6.8-next.3
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/plugin-kubernetes-common@0.7.2-next.1

## 0.1.2-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.6.8-next.2
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/plugin-kubernetes-common@0.7.2-next.1

## 0.1.2-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-kubernetes-common@0.7.2-next.1
  - @kozmoai/backend-plugin-api@0.6.8-next.1
  - @kozmoai/catalog-model@1.4.3

## 0.1.2-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-kubernetes-common@0.7.2-next.0
  - @kozmoai/backend-plugin-api@0.6.8-next.0
  - @kozmoai/catalog-model@1.4.3

## 0.1.1

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-kubernetes-common@0.7.1
  - @kozmoai/backend-plugin-api@0.6.7
  - @kozmoai/catalog-model@1.4.3

## 0.1.1-next.2

### Patch Changes

- Updated dependencies
  - @kozmoai/plugin-kubernetes-common@0.7.1-next.1
  - @kozmoai/backend-plugin-api@0.6.7-next.2

## 0.1.1-next.1

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.6.7-next.1
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/plugin-kubernetes-common@0.7.1-next.0

## 0.1.1-next.0

### Patch Changes

- Updated dependencies
  - @kozmoai/backend-plugin-api@0.6.7-next.0
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/plugin-kubernetes-common@0.7.1-next.0

## 0.1.0

### Minor Changes

- cbb0e3c3f4: A new plugin has been introduced to house the extension points for Kubernetes backend plugin; at the moment only the `KubernetesObjectsProviderExtensionPoint` is present. The `kubernetes-backend` plugin was modified to use this new extension point.

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-model@1.4.3
  - @kozmoai/plugin-kubernetes-common@0.7.0
  - @kozmoai/backend-plugin-api@0.6.6

## 0.1.0-next.0

### Minor Changes

- cbb0e3c3f4: A new plugin has been introduced to house the extension points for Kubernetes backend plugin; at the moment only the `KubernetesObjectsProviderExtensionPoint` is present. The `kubernetes-backend` plugin was modified to use this new extension point.

### Patch Changes

- Updated dependencies
  - @kozmoai/catalog-model@1.4.3-next.0
  - @kozmoai/plugin-kubernetes-common@0.7.0-next.1
  - @kozmoai/backend-plugin-api@0.6.6-next.2