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

import { Config } from '@kozmoai/config';

/**
 * The configuration parameters for a single AWS Organization Processor
 */
export type AwsOrganizationProviderConfig = {
  /**
   * The role to assume for the processor.
   */
  roleArn?: string;
};

export function readAwsOrganizationConfig(
  config: Config,
): AwsOrganizationProviderConfig {
  const providerConfig = config.getOptionalConfig('provider');

  const roleArn = providerConfig?.getOptionalString('roleArn');
  return {
    roleArn,
  };
}