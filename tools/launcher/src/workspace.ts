import path, { join } from 'path';

import fs from 'fs-extra';
import { IPackageJson } from 'package-json-type';
import { listWorkspaces } from 'yarn-workspaces-list';

import { getFingerprint } from './fingerprint';

const getPackageJson = async (cwd: string): Promise<IPackageJson> =>
  fs.readJson(path.join(cwd, 'package.json')) as Promise<IPackageJson>;

export class Workspace {
  workspaceDir: string;

  name: string;

  location: string;

  dependencies: Workspace['name'][];

  packageJson: IPackageJson;

  locationAbsolute: string;

  changed = false;

  constructor({
    name,
    location,
    dependencies,
    packageJson,
    workspaceDir,
    locationAbsolute,
  }: Pick<
    Workspace,
    | 'name'
    | 'location'
    | 'dependencies'
    | 'packageJson'
    | 'workspaceDir'
    | 'locationAbsolute'
  >) {
    this.name = name;
    this.location = location;
    this.dependencies = dependencies;
    this.packageJson = packageJson;
    this.locationAbsolute = locationAbsolute;
    this.workspaceDir = workspaceDir;
  }

  get fingerprint(): Promise<string> {
    return getFingerprint(
      this.name,
      join(this.workspaceDir, this.location)
    ).then(([fingerprint]) => fingerprint);
  }

  static getWorspaces = async (
    workspaceDir = process.cwd()
  ): Promise<Workspace[]> => {
    const w = await listWorkspaces({ cwd: workspaceDir });

    return Promise.all(
      w.map(async (workspace) => {
        const packagePath = path.join(workspaceDir, workspace.location);
        const packageDefinition = await getPackageJson(packagePath);

        return new Workspace({
          name: workspace.name,
          location: workspace.location,
          locationAbsolute: packagePath,
          dependencies: workspace.workspaceDependencies,
          packageJson: packageDefinition,
          workspaceDir,
        });
      })
    );
  };
}

if (module === require.main) {
  Workspace.getWorspaces().then(console.log).catch(console.error);
}
