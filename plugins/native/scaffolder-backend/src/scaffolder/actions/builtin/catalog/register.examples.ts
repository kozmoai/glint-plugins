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

import { TemplateExample } from '@kozmoai/plugin-scaffolder-node';
import yaml from 'yaml';

export const examples: TemplateExample[] = [
  {
    description: 'Register with the catalog',
    example: yaml.stringify({
      steps: [
        {
          action: 'catalog:register',
          id: 'register-with-catalog',
          name: 'Register with the catalog',
          input: {
            catalogInfoUrl:
              'http://github.com/kozmoai/glint/blob/master/catalog-info.yaml',
          },
        },
      ],
    }),
  },
];