/*
 * Copyright 2022 The Glint Authors
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

/** @public */
export type AzureSite = {
  href: string;
  logstreamHref: string;
  name: string;
  kind: string;
  location: string;
  resourceGroup: string;
  subscription: string;
  state: string;
  usageState: string;
  containerSize: number;
  lastModifiedDate: string;
  tags: {};
};

/** @public */
export type AzureSiteListRequest = {
  name: string;
};

/** @public */
export type AzureSiteListResponse = {
  items: AzureSite[];
};

/** @public */
export type AzureSiteStartStopRequest = {
  subscription: string;
  resourceGroup: string;
  name: string;
};

/** @public */
export type AzureSiteBackendRequest = {
  subscription: string;
  resourceGroup: string;
  name: string;
  entityRef: string;
};