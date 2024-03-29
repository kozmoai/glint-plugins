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

import React from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import { settingsRouteRef } from '../plugin';
import { SidebarItem } from '@kozmoai/core-components';
import { useRouteRef, IconComponent } from '@kozmoai/core-plugin-api';

/** @public */
export const Settings = (props: { icon?: IconComponent }) => {
  const routePath = useRouteRef(settingsRouteRef);
  const Icon = props.icon ? props.icon : SettingsIcon;
  return <SidebarItem text="Settings" to={routePath()} icon={Icon} />;
};