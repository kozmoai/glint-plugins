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
    description: 'Downloads a file and places it in the workspace.',
    example: yaml.stringify({
      steps: [
        {
          action: 'fetch:plain:file',
          id: 'fetch-plain-file',
          name: 'Fetch plain file',
          input: {
            url: 'https://github.com/kozmoai/community/tree/main/glint-community-sessions/assets/Glint%20Community%20Sessions.png',
            targetPath: 'target-path',
          },
        },
      ],
    }),
  },
];