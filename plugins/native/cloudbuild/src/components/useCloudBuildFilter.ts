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

const CLOUDBUILD_FILTER_REPO_STRING = 'substitutions.REPO_NAME=';
const CLOUDBUILD_FILTER_REPO_ANNOTATION = 'google.com/cloudbuild-repo-name';
const CLOUDBUILD_FILTER_TRIGGER_STRING = 'substitutions.TRIGGER_NAME=';
const CLOUDBUILD_FILTER_TRIGGER_ANNOTATION =
  'google.com/cloudbuild-trigger-name';

/** @public */

export const getCloudbuildFilter = (entity: Entity) => {
  const repoAnnotation =
    entity?.metadata.annotations?.[CLOUDBUILD_FILTER_REPO_ANNOTATION] ?? '';
  const triggerAnnotation =
    entity?.metadata.annotations?.[CLOUDBUILD_FILTER_TRIGGER_ANNOTATION] ?? '';
  if (repoAnnotation) {
    const cloudbuildFilter = CLOUDBUILD_FILTER_REPO_STRING + repoAnnotation;
    return cloudbuildFilter;
  } else if (triggerAnnotation) {
    const cloudbuildFilter =
      CLOUDBUILD_FILTER_TRIGGER_STRING + triggerAnnotation;
    return cloudbuildFilter;
  }
  const entityName = entity?.metadata.name ?? '';
  const cloudbuildFilter = CLOUDBUILD_FILTER_REPO_STRING + entityName;
  return cloudbuildFilter;
};