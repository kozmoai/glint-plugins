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

import {
  DatabaseManager,
  getVoidLogger,
  PluginDatabaseManager,
  UrlReaders,
} from '@kozmoai/backend-common';
import { CatalogApi } from '@kozmoai/catalog-client';
import { ConfigReader } from '@kozmoai/config';
import { TemplateEntityV1beta3 } from '@kozmoai/plugin-scaffolder-common';
import express from 'express';
import request from 'supertest';
import ObservableImpl from 'zen-observable';

/**
 * TODO: The following should import directly from the router file.
 * Due to a circular dependency between this plugin and the
 * plugin-scaffolder-backend-module-cookiecutter plugin, it results in an error:
 * TypeError: _pluginscaffolderbackend.createTemplateAction is not a function
 */
import {
  parseEntityRef,
  stringifyEntityRef,
  UserEntity,
} from '@kozmoai/catalog-model';
import { createRouter, DatabaseTaskStore } from '../index';
import { TaskBroker } from '@kozmoai/plugin-scaffolder-node';
import { StorageTaskBroker } from '../scaffolder/tasks/StorageTaskBroker';
import {
  AuthorizeResult,
  PermissionEvaluator,
} from '@kozmoai/plugin-permission-common';
import { mockCredentials, mockServices } from '@kozmoai/backend-test-utils';

const mockAccess = jest.fn();

jest.mock('fs-extra', () => ({
  access: (...args: any[]) => mockAccess(...args),
  promises: {
    access: (...args: any[]) => mockAccess(...args),
  },
  constants: {
    F_OK: 0,
    W_OK: 1,
  },
  mkdir: jest.fn(),
  remove: jest.fn(),
}));

function createDatabase(): PluginDatabaseManager {
  return DatabaseManager.fromConfig(
    new ConfigReader({
      backend: {
        database: {
          client: 'better-sqlite3',
          connection: ':memory:',
        },
      },
    }),
  ).forPlugin('scaffolder');
}

const mockUrlReader = UrlReaders.default({
  logger: getVoidLogger(),
  config: new ConfigReader({}),
});

const config = new ConfigReader({});

describe('createRouter', () => {
  let app: express.Express;
  let loggerSpy: jest.SpyInstance;
  let taskBroker: TaskBroker;
  const catalogClient = { getEntityByRef: jest.fn() } as unknown as CatalogApi;
  const permissionApi = {
    authorize: jest.fn(),
    authorizeConditional: jest.fn(),
  } as unknown as PermissionEvaluator;
  const auth = mockServices.auth();
  const httpAuth = mockServices.httpAuth();
  const discovery = mockServices.discovery();

  const credentials = mockCredentials.user();
  const token = mockCredentials.service.token({
    onBehalfOf: credentials,
    targetPluginId: 'catalog',
  });

  const getMockTemplate = (): TemplateEntityV1beta3 => ({
    apiVersion: 'scaffolder.glint.io/v1beta3',
    kind: 'Template',
    metadata: {
      description: 'Create a new CRA website project',
      name: 'create-react-app-template',
      tags: ['experimental', 'react', 'cra'],
      title: 'Create React App Template',
      annotations: {
        'glint.io/managed-by-location': 'url:https://dev.azure.com',
      },
    },
    spec: {
      owner: 'web@example.com',
      type: 'website',
      steps: [
        {
          id: 'step-one',
          name: 'First log',
          action: 'debug:log',
          input: {
            message: 'hello',
          },
        },
        {
          id: 'step-two',
          name: 'Second log',
          action: 'debug:log',
          input: {
            message: 'world',
          },
          'glint:permissions': {
            tags: ['steps-tag'],
          },
        },
      ],
      parameters: [
        {
          type: 'object',
          required: ['requiredParameter1'],
          properties: {
            requiredParameter1: {
              type: 'string',
              description: 'Required parameter 1',
            },
          },
        },
        {
          type: 'object',
          required: ['requiredParameter2'],
          'glint:permissions': {
            tags: ['parameters-tag'],
          },
          properties: {
            requiredParameter2: {
              type: 'string',
              description: 'Required parameter 2',
            },
          },
        },
      ],
    },
  });

  const mockUser: UserEntity = {
    apiVersion: 'glint.io/v1alpha1',
    kind: 'User',
    metadata: {
      name: 'guest',
      annotations: {
        'google.com/email': 'bobby@tables.com',
      },
    },
    spec: {
      profile: {
        displayName: 'Robert Tables of the North',
      },
    },
  };

  describe('not providing an identity api', () => {
    beforeEach(async () => {
      const logger = getVoidLogger();
      const databaseTaskStore = await DatabaseTaskStore.create({
        database: createDatabase(),
      });
      taskBroker = new StorageTaskBroker(databaseTaskStore, logger, config);

      jest.spyOn(taskBroker, 'dispatch');
      jest.spyOn(taskBroker, 'get');
      jest.spyOn(taskBroker, 'list');
      jest.spyOn(taskBroker, 'event$');
      loggerSpy = jest.spyOn(logger, 'info');

      const router = await createRouter({
        logger: logger,
        config: new ConfigReader({}),
        database: createDatabase(),
        catalogClient,
        reader: mockUrlReader,
        taskBroker,
        permissions: permissionApi,
        auth,
        httpAuth,
        discovery,
      });
      app = express().use(router);

      jest
        .spyOn(catalogClient, 'getEntityByRef')
        .mockImplementation(async ref => {
          const { kind } = parseEntityRef(ref);

          if (kind.toLocaleLowerCase() === 'template') {
            return getMockTemplate();
          }

          if (kind.toLocaleLowerCase() === 'user') {
            return mockUser;
          }

          throw new Error(`no mock found for kind: ${kind}`);
        });

      jest
        .spyOn(permissionApi, 'authorizeConditional')
        .mockImplementation(async () => [
          {
            result: AuthorizeResult.ALLOW,
          },
          {
            result: AuthorizeResult.ALLOW,
          },
        ]);
    });

    afterEach(() => {
      jest.resetAllMocks();
    });

    describe('GET /v2/actions', () => {
      it('lists available actions', async () => {
        const response = await request(app).get('/v2/actions').send();
        expect(response.status).toEqual(200);
        expect(response.body[0].id).toBeDefined();
        expect(response.body.length).toBeGreaterThan(8);
      });
    });

    describe('POST /v2/tasks', () => {
      it('rejects template values which do not match the template schema definition', async () => {
        const response = await request(app)
          .post('/v2/tasks')
          .send({
            templateRef: stringifyEntityRef({
              kind: 'template',
              name: 'create-react-app-template',
            }),
            values: {
              storePath: 'https://github.com/kozmoai/glint',
            },
          });

        expect(response.status).toEqual(400);
      });

      it('return the template id', async () => {
        const broker =
          taskBroker.dispatch as jest.Mocked<TaskBroker>['dispatch'];
        broker.mockResolvedValue({
          taskId: 'a-random-id',
        });

        const response = await request(app)
          .post('/v2/tasks')
          .send({
            templateRef: stringifyEntityRef({
              kind: 'template',
              name: 'create-react-app-template',
            }),
            values: {
              requiredParameter1: 'required-value-1',
              requiredParameter2: 'required-value-2',
            },
          });

        expect(response.status).toEqual(201);
        expect(response.body.id).toBe('a-random-id');
      });

      it('should call the broker with a correct spec', async () => {
        const broker =
          taskBroker.dispatch as jest.Mocked<TaskBroker>['dispatch'];
        const mockToken = mockCredentials.user.token();
        const mockTemplate = getMockTemplate();

        await request(app)
          .post('/v2/tasks')
          .set('Authorization', `Bearer ${mockToken}`)
          .send({
            templateRef: stringifyEntityRef({
              kind: 'template',
              name: 'create-react-app-template',
            }),
            values: {
              requiredParameter1: 'required-value-1',
              requiredParameter2: 'required-value-2',
            },
          });

        expect(broker).toHaveBeenCalledWith(
          expect.objectContaining({
            createdBy: 'user:default/mock',
            secrets: {
              glintToken: token,
              initiatorCredentials: JSON.stringify(credentials),
            },

            spec: {
              apiVersion: mockTemplate.apiVersion,
              steps: mockTemplate.spec.steps.map((step, index) => ({
                ...step,
                id: step.id ?? `step-${index + 1}`,
                name: step.name ?? step.action,
              })),
              output: mockTemplate.spec.output ?? {},
              parameters: {
                requiredParameter1: 'required-value-1',
                requiredParameter2: 'required-value-2',
              },
              user: {
                entity: mockUser,
                ref: 'user:default/mock',
              },
              templateInfo: {
                entityRef: stringifyEntityRef({
                  kind: 'Template',
                  namespace: 'Default',
                  name: mockTemplate.metadata?.name,
                }),
                baseUrl: 'https://dev.azure.com',
                entity: {
                  metadata: mockTemplate.metadata,
                },
              },
            },
          }),
        );
      });

      it('should emit auditlog containing user identifier when glint auth is passed', async () => {
        const mockToken = mockCredentials.user.token();

        await request(app)
          .post('/v2/tasks')
          .set('Authorization', `Bearer ${mockToken}`)
          .send({
            templateRef: stringifyEntityRef({
              kind: 'template',
              name: 'create-react-app-template',
            }),
            values: {
              requiredParameter1: 'required-value-1',
              requiredParameter2: 'required-value-2',
            },
          });

        expect(loggerSpy).toHaveBeenCalledTimes(1);
        expect(loggerSpy).toHaveBeenCalledWith(
          'Scaffolding task for template:default/create-react-app-template created by user:default/mock',
        );
      });
    });

    describe('GET /v2/tasks', () => {
      it('return all tasks', async () => {
        (
          taskBroker.list as jest.Mocked<Required<TaskBroker>>['list']
        ).mockResolvedValue({
          tasks: [
            {
              id: 'a-random-id',
              spec: {} as any,
              status: 'completed',
              createdAt: '',
              createdBy: '',
            },
          ],
        });

        const response = await request(app).get(`/v2/tasks`);
        expect(taskBroker.list).toHaveBeenCalledWith({
          createdBy: undefined,
        });
        expect(response.status).toEqual(200);
        expect(response.body).toStrictEqual({
          tasks: [
            {
              id: 'a-random-id',
              spec: {} as any,
              status: 'completed',
              createdAt: '',
              createdBy: '',
            },
          ],
        });
      });

      it('return filtered tasks', async () => {
        (
          taskBroker.list as jest.Mocked<Required<TaskBroker>>['list']
        ).mockResolvedValue({
          tasks: [
            {
              id: 'a-random-id',
              spec: {} as any,
              status: 'completed',
              createdAt: '',
              createdBy: 'user:default/foo',
            },
          ],
        });

        const response = await request(app).get(
          `/v2/tasks?createdBy=user:default/foo`,
        );
        expect(taskBroker.list).toHaveBeenCalledWith({
          createdBy: 'user:default/foo',
        });

        expect(response.status).toEqual(200);
        expect(response.body).toStrictEqual({
          tasks: [
            {
              id: 'a-random-id',
              spec: {} as any,
              status: 'completed',
              createdAt: '',
              createdBy: 'user:default/foo',
            },
          ],
        });
      });
    });

    describe('GET /v2/tasks/:taskId', () => {
      it('does not divulge secrets', async () => {
        (taskBroker.get as jest.Mocked<TaskBroker>['get']).mockResolvedValue({
          id: 'a-random-id',
          spec: {} as any,
          status: 'completed',
          createdAt: '',
          secrets: {
            glintToken: token,
            initiatorCredentials: JSON.stringify(credentials),
          },
          createdBy: '',
        });

        const response = await request(app).get(`/v2/tasks/a-random-id`);
        expect(response.status).toEqual(200);
        expect(response.body.status).toBe('completed');
        expect(response.body.secrets).toBeUndefined();
      });
    });

    describe('GET /v2/tasks/:taskId/eventstream', () => {
      it('should return log messages', async () => {
        let subscriber: ZenObservable.SubscriptionObserver<any>;
        (
          taskBroker.event$ as jest.Mocked<TaskBroker>['event$']
        ).mockImplementation(({ taskId }) => {
          return new ObservableImpl(observer => {
            subscriber = observer;
            setImmediate(() => {
              observer.next({
                events: [
                  {
                    id: 0,
                    taskId,
                    type: 'log',
                    createdAt: '',
                    body: { message: 'My log message' },
                  },
                ],
              });
              observer.next({
                events: [
                  {
                    id: 1,
                    taskId,
                    type: 'completion',
                    createdAt: '',
                    body: { message: 'Finished!' },
                  },
                ],
              });
            });
          });
          // emit after this function returned
        });

        let statusCode: any = undefined;
        let headers: any = {};
        const responseDataFn = jest.fn();

        const req = request(app)
          .get('/v2/tasks/a-random-id/eventstream')
          .set('accept', 'text/event-stream')
          .parse((res, _) => {
            ({ statusCode, headers } = res as any);

            res.on('data', chunk => {
              responseDataFn(chunk.toString());

              // the server expects the client to abort the request
              if (chunk.includes('completion')) {
                req.abort();
              }
            });
          });

        // wait for the request to finish
        await req.catch(() => {
          // ignore 'aborted' error
        });

        expect(statusCode).toBe(200);
        expect(headers['content-type']).toBe('text/event-stream');
        expect(responseDataFn).toHaveBeenCalledTimes(2);
        expect(responseDataFn).toHaveBeenCalledWith(`event: log
data: {"id":0,"taskId":"a-random-id","type":"log","createdAt":"","body":{"message":"My log message"}}

`);
        expect(responseDataFn).toHaveBeenCalledWith(`event: completion
data: {"id":1,"taskId":"a-random-id","type":"completion","createdAt":"","body":{"message":"Finished!"}}

`);

        expect(taskBroker.event$).toHaveBeenCalledTimes(1);
        expect(taskBroker.event$).toHaveBeenCalledWith({
          taskId: 'a-random-id',
        });
        expect(subscriber!.closed).toBe(true);
      });

      it('should return log messages with after query', async () => {
        let subscriber: ZenObservable.SubscriptionObserver<any>;
        (
          taskBroker.event$ as jest.Mocked<TaskBroker>['event$']
        ).mockImplementation(({ taskId }) => {
          return new ObservableImpl(observer => {
            subscriber = observer;
            setImmediate(() => {
              observer.next({
                events: [
                  {
                    id: 1,
                    taskId,
                    type: 'completion',
                    createdAt: '',
                    body: { message: 'Finished!' },
                  },
                ],
              });
            });
          });
        });

        let statusCode: any = undefined;
        let headers: any = {};

        const req = request(app)
          .get('/v2/tasks/a-random-id/eventstream')
          .query({ after: 10 })
          .set('accept', 'text/event-stream')
          .parse((res, _) => {
            ({ statusCode, headers } = res as any);

            res.on('data', () => {
              // close immediately
              req.abort();
            });
          });

        // wait for the request to finish
        await req.catch(() => {
          // ignore 'aborted' error
        });

        expect(statusCode).toBe(200);
        expect(headers['content-type']).toBe('text/event-stream');

        expect(taskBroker.event$).toHaveBeenCalledTimes(1);
        expect(taskBroker.event$).toHaveBeenCalledWith({
          taskId: 'a-random-id',
          after: 10,
        });

        expect(subscriber!.closed).toBe(true);
      });
    });

    describe('GET /v2/tasks/:taskId/events', () => {
      it('should return log messages', async () => {
        let subscriber: ZenObservable.SubscriptionObserver<any>;
        (
          taskBroker.event$ as jest.Mocked<TaskBroker>['event$']
        ).mockImplementation(({ taskId }) => {
          return new ObservableImpl(observer => {
            subscriber = observer;
            observer.next({
              events: [
                {
                  id: 0,
                  taskId,
                  type: 'log',
                  createdAt: '',
                  body: { message: 'My log message' },
                },
                {
                  id: 1,
                  taskId,
                  type: 'completion',
                  createdAt: '',
                  body: { message: 'Finished!' },
                },
              ],
            });
          });
        });

        const response = await request(app).get('/v2/tasks/a-random-id/events');

        expect(response.status).toEqual(200);
        expect(response.body).toEqual([
          {
            id: 0,
            taskId: 'a-random-id',
            type: 'log',
            createdAt: '',
            body: { message: 'My log message' },
          },
          {
            id: 1,
            taskId: 'a-random-id',
            type: 'completion',
            createdAt: '',
            body: { message: 'Finished!' },
          },
        ]);

        expect(taskBroker.event$).toHaveBeenCalledTimes(1);
        expect(taskBroker.event$).toHaveBeenCalledWith({
          taskId: 'a-random-id',
        });
        expect(subscriber!.closed).toBe(true);
      });

      it('should return log messages with after query', async () => {
        let subscriber: ZenObservable.SubscriptionObserver<any>;
        (
          taskBroker.event$ as jest.Mocked<TaskBroker>['event$']
        ).mockImplementation(() => {
          return new ObservableImpl(observer => {
            subscriber = observer;
            observer.next({ events: [] });
          });
        });

        const response = await request(app)
          .get('/v2/tasks/a-random-id/events')
          .query({ after: 10 });

        expect(response.status).toEqual(200);
        expect(response.body).toEqual([]);

        expect(taskBroker.event$).toHaveBeenCalledTimes(1);
        expect(taskBroker.event$).toHaveBeenCalledWith({
          taskId: 'a-random-id',
          after: 10,
        });
        expect(subscriber!.closed).toBe(true);
      });
    });
  });

  describe('providing an identity api', () => {
    beforeEach(async () => {
      const logger = getVoidLogger();
      const databaseTaskStore = await DatabaseTaskStore.create({
        database: createDatabase(),
      });
      taskBroker = new StorageTaskBroker(databaseTaskStore, logger, config);

      jest.spyOn(taskBroker, 'dispatch');
      jest.spyOn(taskBroker, 'get');
      jest.spyOn(taskBroker, 'list');
      jest.spyOn(taskBroker, 'event$');
      loggerSpy = jest.spyOn(logger, 'info');

      const router = await createRouter({
        logger: logger,
        config: new ConfigReader({}),
        database: createDatabase(),
        catalogClient,
        reader: mockUrlReader,
        taskBroker,
        permissions: permissionApi,
        auth,
        httpAuth,
        discovery,
      });
      app = express().use(router);

      jest
        .spyOn(catalogClient, 'getEntityByRef')
        .mockImplementation(async ref => {
          const { kind } = parseEntityRef(ref);

          if (kind.toLocaleLowerCase() === 'template') {
            return getMockTemplate();
          }

          if (kind.toLocaleLowerCase() === 'user') {
            return mockUser;
          }
          throw new Error(`no mock found for kind: ${kind}`);
        });

      jest
        .spyOn(permissionApi, 'authorizeConditional')
        .mockImplementation(async () => [
          {
            result: AuthorizeResult.ALLOW,
          },
          {
            result: AuthorizeResult.ALLOW,
          },
        ]);
    });

    afterEach(() => {
      jest.resetAllMocks();
    });

    describe('GET /v2/actions', () => {
      it('lists available actions', async () => {
        const response = await request(app).get('/v2/actions').send();
        expect(response.status).toEqual(200);
        expect(response.body[0].id).toBeDefined();
        expect(response.body.length).toBeGreaterThan(8);
      });
    });

    describe('GET /v2/templates/:namespace/:kind/:name/parameter-schema', () => {
      it('returns the parameter schema', async () => {
        const response = await request(app)
          .get(
            '/v2/templates/default/Template/create-react-app-template/parameter-schema',
          )
          .send();

        expect(response.status).toEqual(200);
        expect(response.body).toEqual({
          title: 'Create React App Template',
          description: 'Create a new CRA website project',
          steps: [
            {
              title: 'Please enter the following information',
              schema: {
                required: ['requiredParameter1'],
                type: 'object',
                properties: {
                  requiredParameter1: {
                    description: 'Required parameter 1',
                    type: 'string',
                  },
                },
              },
            },
            {
              title: 'Please enter the following information',
              schema: {
                type: 'object',
                required: ['requiredParameter2'],
                'glint:permissions': {
                  tags: ['parameters-tag'],
                },
                properties: {
                  requiredParameter2: {
                    type: 'string',
                    description: 'Required parameter 2',
                  },
                },
              },
            },
          ],
        });
      });

      it('filters parameters that the user is not authorized to see', async () => {
        jest
          .spyOn(permissionApi, 'authorizeConditional')
          .mockImplementationOnce(async () => [
            {
              result: AuthorizeResult.DENY,
            },
            {
              result: AuthorizeResult.ALLOW,
            },
          ]);
        const response = await request(app)
          .get(
            '/v2/templates/default/Template/create-react-app-template/parameter-schema',
          )
          .send();
        expect(response.status).toEqual(200);
        expect(response.body).toEqual({
          title: 'Create React App Template',
          description: 'Create a new CRA website project',
          steps: [],
        });
      });

      it('filters parameters that the user is not authorized to see in case of conditional decision', async () => {
        jest
          .spyOn(permissionApi, 'authorizeConditional')
          .mockImplementationOnce(async () => [
            {
              conditions: {
                resourceType: 'scaffolder-template',
                rule: 'HAS_TAG',
                params: { tag: 'parameters-tag' },
              },
              pluginId: 'scaffolder',
              resourceType: 'scaffolder-template',
              result: AuthorizeResult.CONDITIONAL,
            },
            {
              result: AuthorizeResult.ALLOW,
            },
          ]);
        const response = await request(app)
          .get(
            '/v2/templates/default/Template/create-react-app-template/parameter-schema',
          )
          .send();
        expect(response.status).toEqual(200);
        expect(response.body).toEqual({
          title: 'Create React App Template',
          description: 'Create a new CRA website project',
          steps: [
            {
              title: 'Please enter the following information',
              schema: {
                type: 'object',
                required: ['requiredParameter2'],
                'glint:permissions': {
                  tags: ['parameters-tag'],
                },
                properties: {
                  requiredParameter2: {
                    type: 'string',
                    description: 'Required parameter 2',
                  },
                },
              },
            },
          ],
        });
      });
    });

    describe('POST /v2/tasks', () => {
      it('rejects template values which do not match the template schema definition', async () => {
        const response = await request(app)
          .post('/v2/tasks')
          .send({
            templateRef: stringifyEntityRef({
              kind: 'template',
              name: 'create-react-app-template',
            }),
            values: {
              storePath: 'https://github.com/kozmoai/glint',
            },
          });

        expect(response.status).toEqual(400);
      });

      it('filters steps that the user is not authorized to see', async () => {
        jest
          .spyOn(permissionApi, 'authorizeConditional')
          .mockImplementation(async () => [
            {
              result: AuthorizeResult.ALLOW,
            },
            {
              result: AuthorizeResult.DENY,
            },
          ]);

        const broker =
          taskBroker.dispatch as jest.Mocked<TaskBroker>['dispatch'];
        const mockTemplate = getMockTemplate();

        await request(app)
          .post('/v2/tasks')
          .send({
            templateRef: stringifyEntityRef({
              kind: 'template',
              name: 'create-react-app-template',
            }),
            values: {
              requiredParameter1: 'required-value-1',
              requiredParameter2: 'required-value-2',
            },
          });
        expect(broker).toHaveBeenCalledWith(
          expect.objectContaining({
            createdBy: 'user:default/mock',
            secrets: {
              glintToken: token,
              initiatorCredentials: JSON.stringify(credentials),
            },

            spec: {
              apiVersion: mockTemplate.apiVersion,
              steps: [],
              output: mockTemplate.spec.output ?? {},
              parameters: {
                requiredParameter1: 'required-value-1',
                requiredParameter2: 'required-value-2',
              },
              user: {
                entity: mockUser,
                ref: 'user:default/mock',
              },
              templateInfo: {
                entityRef: stringifyEntityRef({
                  kind: 'Template',
                  namespace: 'Default',
                  name: mockTemplate.metadata?.name,
                }),
                baseUrl: 'https://dev.azure.com',
                entity: {
                  metadata: mockTemplate.metadata,
                },
              },
            },
          }),
        );
      });

      it('filters steps that the user is not authorized to see in case of conditional decision', async () => {
        jest
          .spyOn(permissionApi, 'authorizeConditional')
          .mockImplementation(async () => [
            {
              result: AuthorizeResult.ALLOW,
            },
            {
              conditions: {
                resourceType: 'scaffolder-template',
                rule: 'HAS_TAG',
                params: { tag: 'steps-tag' },
              },
              pluginId: 'scaffolder',
              resourceType: 'scaffolder-template',
              result: AuthorizeResult.CONDITIONAL,
            },
          ]);

        const broker =
          taskBroker.dispatch as jest.Mocked<TaskBroker>['dispatch'];
        const mockTemplate = getMockTemplate();
        await request(app)
          .post('/v2/tasks')
          .send({
            templateRef: stringifyEntityRef({
              kind: 'template',
              name: 'create-react-app-template',
            }),
            values: {
              requiredParameter1: 'required-value-1',
              requiredParameter2: 'required-value-2',
            },
          });
        expect(broker).toHaveBeenCalledWith(
          expect.objectContaining({
            createdBy: 'user:default/mock',
            secrets: {
              glintToken: token,
              initiatorCredentials: JSON.stringify(credentials),
            },

            spec: {
              apiVersion: mockTemplate.apiVersion,
              steps: [
                {
                  id: 'step-two',
                  name: 'Second log',
                  action: 'debug:log',
                  input: {
                    message: 'world',
                  },
                  'glint:permissions': {
                    tags: ['steps-tag'],
                  },
                },
              ],
              output: mockTemplate.spec.output ?? {},
              parameters: {
                requiredParameter1: 'required-value-1',
                requiredParameter2: 'required-value-2',
              },
              user: {
                entity: mockUser,
                ref: 'user:default/mock',
              },
              templateInfo: {
                entityRef: stringifyEntityRef({
                  kind: 'Template',
                  namespace: 'Default',
                  name: mockTemplate.metadata?.name,
                }),
                baseUrl: 'https://dev.azure.com',
                entity: {
                  metadata: mockTemplate.metadata,
                },
              },
            },
          }),
        );
      });

      it('return the template id', async () => {
        const broker =
          taskBroker.dispatch as jest.Mocked<TaskBroker>['dispatch'];
        broker.mockResolvedValue({
          taskId: 'a-random-id',
        });

        const response = await request(app)
          .post('/v2/tasks')
          .send({
            templateRef: stringifyEntityRef({
              kind: 'template',
              name: 'create-react-app-template',
            }),
            values: {
              requiredParameter1: 'required-value-1',
              requiredParameter2: 'required-value-2',
            },
          });

        expect(response.body.id).toBe('a-random-id');
        expect(response.status).toEqual(201);
      });

      it('should call the broker with a correct spec', async () => {
        const broker =
          taskBroker.dispatch as jest.Mocked<TaskBroker>['dispatch'];
        const mockTemplate = getMockTemplate();

        await request(app)
          .post('/v2/tasks')
          .send({
            templateRef: stringifyEntityRef({
              kind: 'template',
              name: 'create-react-app-template',
            }),
            values: {
              requiredParameter1: 'required-value-1',
              requiredParameter2: 'required-value-2',
            },
          });
        expect(broker).toHaveBeenCalledWith(
          expect.objectContaining({
            createdBy: 'user:default/mock',
            secrets: {
              glintToken: token,
              initiatorCredentials: JSON.stringify(credentials),
            },

            spec: {
              apiVersion: mockTemplate.apiVersion,
              steps: mockTemplate.spec.steps.map((step, index) => ({
                ...step,
                id: step.id ?? `step-${index + 1}`,
                name: step.name ?? step.action,
              })),
              output: mockTemplate.spec.output ?? {},
              parameters: {
                requiredParameter1: 'required-value-1',
                requiredParameter2: 'required-value-2',
              },
              user: {
                entity: mockUser,
                ref: 'user:default/mock',
              },
              templateInfo: {
                entityRef: stringifyEntityRef({
                  kind: 'Template',
                  namespace: 'Default',
                  name: mockTemplate.metadata?.name,
                }),
                baseUrl: 'https://dev.azure.com',
                entity: {
                  metadata: mockTemplate.metadata,
                },
              },
            },
          }),
        );
      });

      it('should emit auditlog containing user identifier when glint auth is passed', async () => {
        await request(app)
          .post('/v2/tasks')
          .send({
            templateRef: stringifyEntityRef({
              kind: 'template',
              name: 'create-react-app-template',
            }),
            values: {
              requiredParameter1: 'required-value-1',
              requiredParameter2: 'required-value-2',
            },
          });

        expect(loggerSpy).toHaveBeenCalledTimes(1);
        expect(loggerSpy).toHaveBeenCalledWith(
          'Scaffolding task for template:default/create-react-app-template created by user:default/mock',
        );
      });
    });

    describe('GET /v2/tasks', () => {
      it('return all tasks', async () => {
        (
          taskBroker.list as jest.Mocked<Required<TaskBroker>>['list']
        ).mockResolvedValue({
          tasks: [
            {
              id: 'a-random-id',
              spec: {} as any,
              status: 'completed',
              createdAt: '',
              createdBy: '',
            },
          ],
        });

        const response = await request(app).get(`/v2/tasks`);
        expect(taskBroker.list).toHaveBeenCalledWith({
          createdBy: undefined,
        });
        expect(response.status).toEqual(200);
        expect(response.body).toStrictEqual({
          tasks: [
            {
              id: 'a-random-id',
              spec: {} as any,
              status: 'completed',
              createdAt: '',
              createdBy: '',
            },
          ],
        });
      });

      it('return filtered tasks', async () => {
        (
          taskBroker.list as jest.Mocked<Required<TaskBroker>>['list']
        ).mockResolvedValue({
          tasks: [
            {
              id: 'a-random-id',
              spec: {} as any,
              status: 'completed',
              createdAt: '',
              createdBy: 'user:default/foo',
            },
          ],
        });

        const response = await request(app).get(
          `/v2/tasks?createdBy=user:default/foo`,
        );
        expect(taskBroker.list).toHaveBeenCalledWith({
          createdBy: 'user:default/foo',
        });

        expect(response.status).toEqual(200);
        expect(response.body).toStrictEqual({
          tasks: [
            {
              id: 'a-random-id',
              spec: {} as any,
              status: 'completed',
              createdAt: '',
              createdBy: 'user:default/foo',
            },
          ],
        });
      });
    });

    describe('GET /v2/tasks/:taskId', () => {
      it('does not divulge secrets', async () => {
        (taskBroker.get as jest.Mocked<TaskBroker>['get']).mockResolvedValue({
          id: 'a-random-id',
          spec: {} as any,
          status: 'completed',
          createdAt: '',
          secrets: {
            glintToken: token,
            initiatorCredentials: JSON.stringify(credentials),
          },
          createdBy: '',
        });

        const response = await request(app).get(`/v2/tasks/a-random-id`);
        expect(response.status).toEqual(200);
        expect(response.body.status).toBe('completed');
        expect(response.body.secrets).toBeUndefined();
      });
    });

    describe('GET /v2/tasks/:taskId/eventstream', () => {
      it('should return log messages', async () => {
        let subscriber: ZenObservable.SubscriptionObserver<any>;
        (
          taskBroker.event$ as jest.Mocked<TaskBroker>['event$']
        ).mockImplementation(({ taskId }) => {
          return new ObservableImpl(observer => {
            subscriber = observer;
            setImmediate(() => {
              observer.next({
                events: [
                  {
                    id: 0,
                    taskId,
                    type: 'log',
                    createdAt: '',
                    body: { message: 'My log message' },
                  },
                ],
              });
              observer.next({
                events: [
                  {
                    id: 1,
                    taskId,
                    type: 'completion',
                    createdAt: '',
                    body: { message: 'Finished!' },
                  },
                ],
              });
            });
          });
          // emit after this function returned
        });

        let statusCode: any = undefined;
        let headers: any = {};
        const responseDataFn = jest.fn();

        const req = request(app)
          .get('/v2/tasks/a-random-id/eventstream')
          .set('accept', 'text/event-stream')
          .parse((res, _) => {
            ({ statusCode, headers } = res as any);

            res.on('data', chunk => {
              responseDataFn(chunk.toString());

              // the server expects the client to abort the request
              if (chunk.includes('completion')) {
                req.abort();
              }
            });
          });

        // wait for the request to finish
        await req.catch(() => {
          // ignore 'aborted' error
        });

        expect(statusCode).toBe(200);
        expect(headers['content-type']).toBe('text/event-stream');
        expect(responseDataFn).toHaveBeenCalledTimes(2);
        expect(responseDataFn).toHaveBeenCalledWith(`event: log
data: {"id":0,"taskId":"a-random-id","type":"log","createdAt":"","body":{"message":"My log message"}}

`);
        expect(responseDataFn).toHaveBeenCalledWith(`event: completion
data: {"id":1,"taskId":"a-random-id","type":"completion","createdAt":"","body":{"message":"Finished!"}}

`);

        expect(taskBroker.event$).toHaveBeenCalledTimes(1);
        expect(taskBroker.event$).toHaveBeenCalledWith({
          taskId: 'a-random-id',
        });
        expect(subscriber!.closed).toBe(true);
      });

      it('should return log messages with after query', async () => {
        let subscriber: ZenObservable.SubscriptionObserver<any>;
        (
          taskBroker.event$ as jest.Mocked<TaskBroker>['event$']
        ).mockImplementation(({ taskId }) => {
          return new ObservableImpl(observer => {
            subscriber = observer;
            setImmediate(() => {
              observer.next({
                events: [
                  {
                    id: 1,
                    taskId,
                    type: 'completion',
                    createdAt: '',
                    body: { message: 'Finished!' },
                  },
                ],
              });
            });
          });
        });

        let statusCode: any = undefined;
        let headers: any = {};

        const req = request(app)
          .get('/v2/tasks/a-random-id/eventstream')
          .query({ after: 10 })
          .set('accept', 'text/event-stream')
          .parse((res, _) => {
            ({ statusCode, headers } = res as any);

            res.on('data', () => {
              // close immediately
              req.abort();
            });
          });

        // wait for the request to finish
        await req.catch(() => {
          // ignore 'aborted' error
        });

        expect(statusCode).toBe(200);
        expect(headers['content-type']).toBe('text/event-stream');

        expect(taskBroker.event$).toHaveBeenCalledTimes(1);
        expect(taskBroker.event$).toHaveBeenCalledWith({
          taskId: 'a-random-id',
          after: 10,
        });

        expect(subscriber!.closed).toBe(true);
      });
    });

    describe('GET /v2/tasks/:taskId/events', () => {
      it('should return log messages', async () => {
        let subscriber: ZenObservable.SubscriptionObserver<any>;
        (
          taskBroker.event$ as jest.Mocked<TaskBroker>['event$']
        ).mockImplementation(({ taskId }) => {
          return new ObservableImpl(observer => {
            subscriber = observer;
            observer.next({
              events: [
                {
                  id: 0,
                  taskId,
                  type: 'log',
                  createdAt: '',
                  body: { message: 'My log message' },
                },
                {
                  id: 1,
                  taskId,
                  type: 'completion',
                  createdAt: '',
                  body: { message: 'Finished!' },
                },
              ],
            });
          });
        });

        const response = await request(app).get('/v2/tasks/a-random-id/events');

        expect(response.status).toEqual(200);
        expect(response.body).toEqual([
          {
            id: 0,
            taskId: 'a-random-id',
            type: 'log',
            createdAt: '',
            body: { message: 'My log message' },
          },
          {
            id: 1,
            taskId: 'a-random-id',
            type: 'completion',
            createdAt: '',
            body: { message: 'Finished!' },
          },
        ]);

        expect(taskBroker.event$).toHaveBeenCalledTimes(1);
        expect(taskBroker.event$).toHaveBeenCalledWith({
          taskId: 'a-random-id',
        });
        expect(subscriber!.closed).toBe(true);
      });

      it('should return log messages with after query', async () => {
        let subscriber: ZenObservable.SubscriptionObserver<any>;
        (
          taskBroker.event$ as jest.Mocked<TaskBroker>['event$']
        ).mockImplementation(() => {
          return new ObservableImpl(observer => {
            subscriber = observer;
            observer.next({ events: [] });
          });
        });

        const response = await request(app)
          .get('/v2/tasks/a-random-id/events')
          .query({ after: 10 });

        expect(response.status).toEqual(200);
        expect(response.body).toEqual([]);

        expect(taskBroker.event$).toHaveBeenCalledTimes(1);
        expect(taskBroker.event$).toHaveBeenCalledWith({
          taskId: 'a-random-id',
          after: 10,
        });
        expect(subscriber!.closed).toBe(true);
      });
    });
  });
});