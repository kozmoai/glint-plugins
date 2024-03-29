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

import { Entity } from '@kozmoai/catalog-model';

/**
 * @public
 */
export const CODESCENE_PROJECT_ANNOTATION = 'codescene.io/project-id';

/**
 * @public
 */
export const getProjectAnnotation = (entity: Entity) => {
  const annotation =
    entity?.metadata.annotations?.[CODESCENE_PROJECT_ANNOTATION];
  const projectId = annotation?.split('/')[0];
  return { projectId: Number(projectId) };
};

/**
 * @public
 */
export const isCodeSceneAvailable = (entity: Entity) =>
  Boolean(getProjectAnnotation(entity).projectId);