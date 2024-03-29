## API Report File for "@kozmoai/plugin-azure-devops-backend"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
import { BackendFeature } from '@kozmoai/backend-plugin-api';
import { Build } from 'azure-devops-node-api/interfaces/BuildInterfaces';
import { BuildDefinitionReference } from 'azure-devops-node-api/interfaces/BuildInterfaces';
import { BuildRun } from '@kozmoai/plugin-azure-devops-common';
import { CatalogProcessor } from '@kozmoai/plugin-catalog-node';
import { Config } from '@kozmoai/config';
import { DashboardPullRequest } from '@kozmoai/plugin-azure-devops-common';
import { Entity } from '@kozmoai/catalog-model';
import express from 'express';
import { GitRepository } from 'azure-devops-node-api/interfaces/GitInterfaces';
import { GitTag } from '@kozmoai/plugin-azure-devops-common';
import { LocationSpec } from '@kozmoai/plugin-catalog-common';
import { Logger } from 'winston';
import { PermissionEvaluator } from '@kozmoai/plugin-permission-common';
import { Project } from '@kozmoai/plugin-azure-devops-common';
import { PullRequest } from '@kozmoai/plugin-azure-devops-common';
import { PullRequestOptions } from '@kozmoai/plugin-azure-devops-common';
import { RepoBuild } from '@kozmoai/plugin-azure-devops-common';
import { ScmIntegrationRegistry } from '@kozmoai/integration';
import { Team } from '@kozmoai/plugin-azure-devops-common';
import { TeamMember } from '@kozmoai/plugin-azure-devops-common';
import { UrlReader } from '@kozmoai/backend-common';

// @public (undocumented)
export class AzureDevOpsAnnotatorProcessor implements CatalogProcessor {
  constructor(opts: {
    scmIntegrationRegistry: ScmIntegrationRegistry;
    kinds?: string[];
  });
  // (undocumented)
  static fromConfig(
    config: Config,
    options?: {
      kinds?: string[];
    },
  ): AzureDevOpsAnnotatorProcessor;
  // (undocumented)
  getProcessorName(): string;
  // (undocumented)
  preProcessEntity(entity: Entity, location: LocationSpec): Promise<Entity>;
}

// @public (undocumented)
export class AzureDevOpsApi {
  // (undocumented)
  static fromConfig(
    config: Config,
    options: {
      logger: Logger;
      urlReader: UrlReader;
    },
  ): AzureDevOpsApi;
  // (undocumented)
  getAllTeams(): Promise<Team[]>;
  // (undocumented)
  getBuildDefinitions(
    projectName: string,
    definitionName: string,
    host?: string,
    org?: string,
  ): Promise<BuildDefinitionReference[]>;
  // (undocumented)
  getBuildList(
    projectName: string,
    repoId: string,
    top: number,
    host?: string,
    org?: string,
  ): Promise<Build[]>;
  // (undocumented)
  getBuildRuns(
    projectName: string,
    top: number,
    repoName?: string,
    definitionName?: string,
    host?: string,
    org?: string,
  ): Promise<BuildRun[]>;
  // (undocumented)
  getBuilds(
    projectName: string,
    top: number,
    repoId?: string,
    definitions?: number[],
    host?: string,
    org?: string,
  ): Promise<Build[]>;
  // (undocumented)
  getDashboardPullRequests(
    projectName: string,
    options: PullRequestOptions,
  ): Promise<DashboardPullRequest[]>;
  // (undocumented)
  getGitRepository(
    projectName: string,
    repoName: string,
    host?: string,
    org?: string,
  ): Promise<GitRepository>;
  // (undocumented)
  getGitTags(
    projectName: string,
    repoName: string,
    host?: string,
    org?: string,
  ): Promise<GitTag[]>;
  // (undocumented)
  getProjects(host?: string, org?: string): Promise<Project[]>;
  // (undocumented)
  getPullRequests(
    projectName: string,
    repoName: string,
    options: PullRequestOptions,
    host?: string,
    org?: string,
  ): Promise<PullRequest[]>;
  // (undocumented)
  getReadme(
    host: string,
    org: string,
    project: string,
    repo: string,
    path: string,
  ): Promise<{
    url: string;
    content: string;
  }>;
  // (undocumented)
  getRepoBuilds(
    projectName: string,
    repoName: string,
    top: number,
    host?: string,
    org?: string,
  ): Promise<RepoBuild[]>;
  // (undocumented)
  getTeamMembers(options: {
    projectId: string;
    teamId: string;
  }): Promise<TeamMember[] | undefined>;
}

// @public
const azureDevOpsPlugin: () => BackendFeature;
export default azureDevOpsPlugin;

// @public (undocumented)
export function createRouter(options: RouterOptions): Promise<express.Router>;

// @public (undocumented)
export interface RouterOptions {
  // (undocumented)
  azureDevOpsApi?: AzureDevOpsApi;
  // (undocumented)
  config: Config;
  // (undocumented)
  logger: Logger;
  // (undocumented)
  permissions: PermissionEvaluator;
  // (undocumented)
  reader: UrlReader;
}
```