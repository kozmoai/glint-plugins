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

import { azureDevOpsGitTagReadPermission } from '@kozmoai/plugin-azure-devops-common';
import { GitTagTable } from '../GitTagTable/GitTagTable';
import React from 'react';
import { stringifyEntityRef } from '@kozmoai/catalog-model';
import { useEntity } from '@kozmoai/plugin-catalog-react';
import { RequirePermission } from '@kozmoai/plugin-permission-react';

export const EntityPageAzureGitTags = () => {
  const { entity } = useEntity();
  return (
    <RequirePermission
      permission={azureDevOpsGitTagReadPermission}
      resourceRef={stringifyEntityRef(entity)}
      errorPage={null}
    >
      <GitTagTable />
    </RequirePermission>
  );
};