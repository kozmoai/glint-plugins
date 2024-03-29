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
import { renderInTestApp } from '@kozmoai/test-utils';
import GetBBoxPolyfill from '../../utils/polyfills/getBBox';

import RadarBubble, { Props } from './RadarBubble';

const minProps: Props = {
  visible: true,
  text: 'RadarBubble',
  x: 2,
  y: 2,
};

describe('RadarBubble', () => {
  beforeAll(() => {
    GetBBoxPolyfill.create(0, 0, 1000, 500);
  });

  afterAll(() => {
    GetBBoxPolyfill.remove();
  });

  it('should render', async () => {
    const rendered = await renderInTestApp(
      <svg>
        <RadarBubble {...minProps} />
      </svg>,
    );

    expect(rendered.getByText(minProps.text)).toBeInTheDocument();
  });
});