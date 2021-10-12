/* eslint-disable import/no-dynamic-require */
import path, { join } from 'path';
import util from 'util';

import { Emitter } from '@rocket.chat/emitter';
import execa from 'execa';
import fs from 'fs-extra';
import { IPackageJson } from 'package-json-type';

import Launcher from '../package.json';
import { topologicallySort } from './sortWorkspaces';
import { Workspace } from './workspace';

const ee = new Emitter();

const readJson = util.promisify(fs.readJson);

const getPackageJson = async (cwd: string): Promise<IPackageJson> =>
  readJson(path.join(cwd, 'package.json')) as Promise<IPackageJson>;

// eslint-disable-next-line @typescript-eslint/no-var-requires

const config = {
  cache: 'node_modules/.cache',
  name: Launcher.name,
};

class Command {
  cmd: string;

  constructor(cmd: string) {
    this.cmd = cmd;
  }

  async getPreviousProccessResult(
    workspace: Workspace,
    workspaceDir = process.cwd()
  ): Promise<{ exitCode: number; stderr?: string } | undefined> {
    const stdoutPathDir = path.join(
      workspaceDir,
      config.cache,
      Launcher.name,
      workspace.location,
      'result',
      this.cmd
    );

    console.log(stdoutPathDir);

    return fs
      .readJson(path.join(stdoutPathDir, await workspace.fingerprint))
      .catch(() => undefined) as Promise<
      { exitCode: number; stderr?: string } | undefined
    >;
  }

  async run(workspace: Workspace): Promise<void> {
    execa.commandSync(`yarn ${this.cmd}`, {
      cwd: workspace.locationAbsolute,
    });
  }

  async hasCachedOutput(
    workspace: Workspace,
    defaultDirs: string[],
    workspaceDir?: string
  ): Promise<boolean> {
    const workspaceOutDir = await this.getWorkspaceOutDir(
      workspace,
      defaultDirs,
      workspaceDir
    );

    return (
      await Promise.all(
        workspaceOutDir.map(([_, cacheFolder]) => fs.pathExists(cacheFolder))
      )
    ).every((exists) => Boolean(exists));
  }

  private async getWorkspaceOutDir(
    workspace: Workspace,
    defaultDirs: string[],
    workspaceDir = process.cwd()
  ): Promise<[string, string][]> {
    const dirs: string[] = workspace.packageJson?.launcher?.dir || defaultDirs;

    return Promise.all(
      dirs.map(async (dir) => {
        const packageDist = path.join(workspace.locationAbsolute, dir);
        const cacheFolder = path.join(
          workspaceDir,
          config.cache,
          Launcher.name,
          workspace.location,
          this.cmd,
          await workspace.fingerprint,
          dir
        );
        return [packageDist, cacheFolder] as [string, string];
      })
    );
  }

  async restoreCache(
    workspace: Workspace,
    defaultDirs: string[],
    workspaceDir?: string
  ): Promise<void> {
    const workspaceOutDir = await this.getWorkspaceOutDir(
      workspace,
      defaultDirs,
      workspaceDir
    );
    await Promise.all(
      workspaceOutDir.map(([packageDist, cacheFolder]) =>
        fs.copy(cacheFolder, packageDist)
      )
    );
  }

  async saveResults(
    workspace: Workspace,
    defaultDirs: string[],
    workspaceDir?: string
  ): Promise<void> {
    const workspaceOutDir = await this.getWorkspaceOutDir(
      workspace,
      defaultDirs,
      workspaceDir
    );

    await Promise.all(
      workspaceOutDir.map(([packageDist, cacheFolder]) => {
        if (packageDist) {
          if (fs.existsSync(cacheFolder)) {
            return fs.copy(packageDist, cacheFolder);
          }
          return fs.mkdirp(cacheFolder);
        }
        return undefined;
      })
    );
  }
}

export const run = async (
  command: string,
  workspaceDir = process.cwd(),
  options: {
    packages?: string[];
    exclude?: string[];
    force?: boolean;
    verbose?: boolean;
    savePartialResults?: boolean;
  } = {}
): Promise<void> => {
  if (!command) {
    throw new Error('No command provided');
  }
  const packageWorkspaceJson = await getPackageJson(workspaceDir);

  if (!packageWorkspaceJson.hasOwnProperty('rc-launcher')) {
    console.log(`No launcher configuration found in package.json`);
  }

  const workspaces = topologicallySort(
    await Workspace.getWorspaces(workspaceDir)
  )
    .filter(
      (pkg) =>
        !options.packages || (pkg.name && options.packages.includes(pkg.name))
    )
    .filter(
      (pkg) =>
        pkg.name && (!options.exclude || !options.exclude.includes(pkg.name))
    );

  if (workspaces.length === 0) {
    throw new Error('No packages found');
  }

  const cachedAssets: string[] =
    packageWorkspaceJson['rc-launcher'][command] || [];

  const cmd = new Command(command);

  try {
    for await (const workspace of workspaces) {
      const packageDefinition = workspace.packageJson;

      const previousProccessResult = await cmd.getPreviousProccessResult(
        workspace,
        workspaceDir
      );

      if (previousProccessResult && previousProccessResult.exitCode !== 0) {
        return console.error(previousProccessResult.stderr);
      }

      if (options.force) {
        console.log(`📦  ${command} ${workspace.name} cache forced`);
        cmd.run(workspace);

        options.savePartialResults &&
          cmd.saveResults(workspace, cachedAssets, workspaceDir);
        !options.savePartialResults &&
          ee.once('done', () =>
            cmd.saveResults(workspace, cachedAssets, workspaceDir)
          );
        return;
      }

      const dependencies = workspaces.filter(
        (workspace) =>
          workspace.dependencies.includes(workspace.name) && workspace.changed
      );
      if (dependencies.length > 0) {
        console.log(
          `📦  ${command} ${
            workspace.name
          } depedencies changed: ${dependencies.join()}`
        );
      }
      // check if exists a folder for every single output dir
      const hasCache =
        !dependencies.length &&
        (await cmd.hasCachedOutput(workspace, cachedAssets, workspaceDir));

      hasCache &&
        options.verbose &&
        console.log(`📦  ${command} ${workspace.name} cache found`);
      !hasCache &&
        console.log(`📦  ${command} ${workspace.name} no cache found`);

      // restore all folders from cache

      if (hasCache) {
        await cmd.restoreCache(workspace, cachedAssets, workspaceDir);
        options.verbose && console.log(`✅ ${workspace.name} cache restored`);
        continue;
      }

      workspace.changed = true;

      options.verbose && console.log(`📦  ${command} ${workspace.name}`);

      !options.savePartialResults &&
        ee.once('done', () =>
          cmd.saveResults(workspace, cachedAssets, workspaceDir)
        );

      if (
        !packageDefinition.scripts ||
        !packageDefinition.scripts.hasOwnProperty(command)
      ) {
        options.verbose &&
          console.log(`⚠️  Skipped ${workspace.name} has no script ${command}`);
      } else {
        await cmd.run(workspace);
      }

      options.savePartialResults &&
        cmd.saveResults(workspace, cachedAssets, workspaceDir);
      options.verbose && console.log(`✅ ${command} ${workspace.name} done`);
    }
    ee.emit('done');
  } catch (e) {
    throw e;
  }
};

if (module === require.main) {
  console.log(process.argv);
  run('build', join(__dirname, '../../..'), {
    verbose: true,
    savePartialResults: true,
    exclude: ['@rocket.chat/fuselage-tokens'],
  }).catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
