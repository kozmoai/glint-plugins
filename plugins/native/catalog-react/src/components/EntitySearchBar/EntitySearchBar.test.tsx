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

import React from 'react';
import { fireEvent, render, waitFor, screen } from '@testing-library/react';
import { EntitySearchBar } from './EntitySearchBar';
import { DefaultEntityFilters } from '../../hooks/useEntityListProvider';
import { EntityTextFilter } from '../../filters';
import { MockEntityListContextProvider } from '../../testUtils/providers';

describe('EntitySearchBar', () => {
  it('should display search value and execute set callback', async () => {
    const updateFilters = jest.fn();

    const filters: DefaultEntityFilters = {
      text: new EntityTextFilter('hello'),
    };

    render(
      <MockEntityListContextProvider value={{ updateFilters, filters }}>
        <EntitySearchBar />
      </MockEntityListContextProvider>,
    );

    const searchInput = screen.getByDisplayValue('hello');
    expect(searchInput).toBeInTheDocument();

    fireEvent.change(searchInput, { target: { value: 'world' } });
    await waitFor(() => expect(updateFilters.mock.calls.length).toBe(1));
    expect(updateFilters).toHaveBeenCalledWith({
      text: new EntityTextFilter('world'),
    });

    fireEvent.change(searchInput, { target: { value: '' } });
    await waitFor(() => expect(updateFilters.mock.calls.length).toBe(2));
    expect(updateFilters).toHaveBeenCalledWith({
      text: undefined,
    });
  });
});