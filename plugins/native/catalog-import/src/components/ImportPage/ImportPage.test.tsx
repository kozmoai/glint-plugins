/*
 * Copyright 2021 The Glint Authors
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

import { CatalogClient } from '@kozmoai/catalog-client';
import { ApiProvider, ConfigReader } from '@kozmoai/core-app-api';
import { configApiRef } from '@kozmoai/core-plugin-api';
import { catalogApiRef } from '@kozmoai/plugin-catalog-react';
import { renderInTestApp, TestApiRegistry } from '@kozmoai/test-utils';
import { screen } from '@testing-library/react';
import React from 'react';
import { useOutlet } from 'react-router-dom';
import { catalogImportApiRef, CatalogImportClient } from '../../api';
import { ImportPage } from './ImportPage';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useOutlet: jest.fn(),
}));

describe('<ImportPage />', () => {
  const identityApi = {
    getUserId: () => {
      return 'user';
    },
    getProfile: () => {
      return {};
    },
    getIdToken: () => {
      return Promise.resolve('token');
    },
    signOut: () => {
      return Promise.resolve();
    },
    getProfileInfo: jest.fn(),
    getGlintIdentity: jest.fn(),
    getCredentials: jest.fn(),
  };

  let apis: TestApiRegistry;

  beforeEach(() => {
    apis = TestApiRegistry.from(
      [configApiRef, new ConfigReader({ integrations: {} })],
      [catalogApiRef, new CatalogClient({ discoveryApi: {} as any })],
      [
        catalogImportApiRef,
        new CatalogImportClient({
          discoveryApi: {} as any,
          identityApi,
          scmAuthApi: {} as any,
          scmIntegrationsApi: {} as any,
          catalogApi: {} as any,
          configApi: new ConfigReader({}),
        }),
      ],
    );
  });

  afterEach(() => jest.resetAllMocks());

  it('renders without exploding', async () => {
    await renderInTestApp(
      <ApiProvider apis={apis}>
        <ImportPage />
      </ApiProvider>,
    );

    expect(
      screen.getByText('Start tracking your component in Glint'),
    ).toBeInTheDocument();
  });

  it('renders with custom children', async () => {
    (useOutlet as jest.Mock).mockReturnValue(<div>Hello World</div>);

    await renderInTestApp(
      <ApiProvider apis={apis}>
        <ImportPage />
      </ApiProvider>,
    );

    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });
});