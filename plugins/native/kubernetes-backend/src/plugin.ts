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

import { loggerToWinstonLogger } from '@kozmoai/backend-common';
import {
  coreServices,
  createBackendPlugin,
} from '@kozmoai/backend-plugin-api';
import { catalogServiceRef } from '@kozmoai/plugin-catalog-node/alpha';

import { KubernetesBuilder } from '@kozmoai/plugin-kubernetes-backend';

import {
  kubernetesAuthStrategyExtensionPoint,
  kubernetesClusterSupplierExtensionPoint,
  kubernetesFetcherExtensionPoint,
  kubernetesObjectsProviderExtensionPoint,
  kubernetesServiceLocatorExtensionPoint,
  type AuthenticationStrategy,
  type KubernetesAuthStrategyExtensionPoint,
  type KubernetesClusterSupplierExtensionPoint,
  type KubernetesClustersSupplier,
  type KubernetesFetcher,
  type KubernetesFetcherExtensionPoint,
  type KubernetesObjectsProvider,
  type KubernetesObjectsProviderExtensionPoint,
  type KubernetesServiceLocator,
  type KubernetesServiceLocatorExtensionPoint,
} from '@kozmoai/plugin-kubernetes-node';

class ObjectsProvider implements KubernetesObjectsProviderExtensionPoint {
  private objectsProvider: KubernetesObjectsProvider | undefined;

  getObjectsProvider() {
    return this.objectsProvider;
  }

  addObjectsProvider(provider: KubernetesObjectsProvider) {
    if (this.objectsProvider) {
      throw new Error(
        'Multiple Kubernetes objects provider is not supported at this time',
      );
    }
    this.objectsProvider = provider;
  }
}

class ClusterSuplier implements KubernetesClusterSupplierExtensionPoint {
  private clusterSupplier: KubernetesClustersSupplier | undefined;

  getClusterSupplier() {
    return this.clusterSupplier;
  }

  addClusterSupplier(clusterSupplier: KubernetesClustersSupplier) {
    if (this.clusterSupplier) {
      throw new Error(
        'Multiple Kubernetes Cluster Suppliers is not supported at this time',
      );
    }
    this.clusterSupplier = clusterSupplier;
  }
}

class Fetcher implements KubernetesFetcherExtensionPoint {
  private fetcher: KubernetesFetcher | undefined;

  getFetcher() {
    return this.fetcher;
  }

  addFetcher(fetcher: KubernetesFetcher) {
    if (this.fetcher) {
      throw new Error(
        'Multiple Kubernetes Fetchers is not supported at this time',
      );
    }
    this.fetcher = fetcher;
  }
}

class ServiceLocator implements KubernetesServiceLocatorExtensionPoint {
  private serviceLocator: KubernetesServiceLocator | undefined;

  getServiceLocator() {
    return this.serviceLocator;
  }

  addServiceLocator(serviceLocator: KubernetesServiceLocator) {
    if (this.serviceLocator) {
      throw new Error(
        'Multiple Kubernetes Service Locators is not supported at this time',
      );
    }
    this.serviceLocator = serviceLocator;
  }
}

class AuthStrategy implements KubernetesAuthStrategyExtensionPoint {
  private authStrategies: Array<{
    key: string;
    strategy: AuthenticationStrategy;
  }>;

  constructor() {
    this.authStrategies = new Array<{
      key: string;
      strategy: AuthenticationStrategy;
    }>();
  }

  static addAuthStrategiesFromArray(
    authStrategies: Array<{ key: string; strategy: AuthenticationStrategy }>,
    builder: KubernetesBuilder,
  ) {
    authStrategies.forEach(st => builder.addAuthStrategy(st.key, st.strategy));
  }

  getAuthenticationStrategies() {
    return this.authStrategies;
  }

  addAuthStrategy(key: string, authStrategy: AuthenticationStrategy) {
    this.authStrategies.push({ key, strategy: authStrategy });
  }
}

/**
 * This is the backend plugin that provides the Kubernetes integration.
 * @alpha
 */

export const kubernetesPlugin = createBackendPlugin({
  pluginId: 'kubernetes',
  register(env) {
    const extPointObjectsProvider = new ObjectsProvider();
    const extPointClusterSuplier = new ClusterSuplier();
    const extPointAuthStrategy = new AuthStrategy();
    const extPointFetcher = new Fetcher();
    const extPointServiceLocator = new ServiceLocator();

    env.registerExtensionPoint(
      kubernetesObjectsProviderExtensionPoint,
      extPointObjectsProvider,
    );
    env.registerExtensionPoint(
      kubernetesClusterSupplierExtensionPoint,
      extPointClusterSuplier,
    );
    env.registerExtensionPoint(
      kubernetesAuthStrategyExtensionPoint,
      extPointAuthStrategy,
    );
    env.registerExtensionPoint(
      kubernetesFetcherExtensionPoint,
      extPointFetcher,
    );
    env.registerExtensionPoint(
      kubernetesServiceLocatorExtensionPoint,
      extPointServiceLocator,
    );

    env.registerInit({
      deps: {
        http: coreServices.httpRouter,
        logger: coreServices.logger,
        config: coreServices.rootConfig,
        discovery: coreServices.discovery,
        catalogApi: catalogServiceRef,
        permissions: coreServices.permissions,
        auth: coreServices.auth,
        httpAuth: coreServices.httpAuth,
      },
      async init({
        http,
        logger,
        config,
        discovery,
        catalogApi,
        permissions,
        auth,
        httpAuth,
      }) {
        const winstonLogger = loggerToWinstonLogger(logger);
        // TODO: expose all of the customization & extension points of the builder here
        const builder: KubernetesBuilder = KubernetesBuilder.createBuilder({
          logger: winstonLogger,
          config,
          catalogApi,
          permissions,
          discovery,
          auth,
          httpAuth,
        })
          .setObjectsProvider(extPointObjectsProvider.getObjectsProvider())
          .setClusterSupplier(extPointClusterSuplier.getClusterSupplier())
          .setFetcher(extPointFetcher.getFetcher())
          .setServiceLocator(extPointServiceLocator.getServiceLocator());

        AuthStrategy.addAuthStrategiesFromArray(
          extPointAuthStrategy.getAuthenticationStrategies(),
          builder,
        );
        const { router } = await builder.build();
        http.use(router);
      },
    });
  },
});