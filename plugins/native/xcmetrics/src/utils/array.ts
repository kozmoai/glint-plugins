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

export const sumField = <T extends {}>(
  field: (element: T) => number,
  arr?: T[],
) => {
  return arr?.reduce((sum, current) => sum + field(current), 0);
};

export const getValues = <T extends {}>(
  field: (element: T) => number,
  arr?: T[],
) => {
  if (!arr?.length) {
    return undefined;
  }

  return arr.map(element => field(element));
};