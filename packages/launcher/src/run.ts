/* eslint-disable import/no-dynamic-require */
import path from 'path';
import util from 'util';

import execa from 'execa';
import fs from 'fs-extra';
import { IPackageJson } from 'package-json-type';

import Launcher from '../package.json';
import { getFingerprint } from './fingerprint';
import { topologicallySort } from './sortWorkspaces';
import { getPackages } from './workspace';

const readJson = util.promisify(fs.readJson);

const getPackageJson = async (cwd: string): Promise<IPackageJson> =>
  readJson(path.join(cwd, 'package.json')) as Promise<IPackageJson>;

// eslint-disable-next-line @typescript-eslint/no-var-requires

const config = {
  cache: 'node_modules/.cache',
  name: Launcher.name,
};

export const run = async (
  command: string,
  workspaceDir = process.cwd(),
  options: {
    packages?: string[];
    exclude?: string[];
    force?: boolean;
    verbose?: boolean;
  } = {}
): Promise<void> => {
  if (!command) {
    throw new Error('No command provided');
  }

  const packages = topologicallySort(await getPackages(workspaceDir))
    .filter(
      (pkg) =>
        !options.packages || (pkg.name && options.packages.includes(pkg.name))
    )
    .filter(
      (pkg) =>
        pkg.name && (!options.exclude || !options.exclude.includes(pkg.name))
    );

  if (packages.length === 0) {
    throw new Error('No packages found');
  }

  const packageWorkspaceJson = await getPackageJson(workspaceDir);

  const cachedAssets: string[] =
    packageWorkspaceJson['rc-launcher'][command] || [];

  for await (const pkg of packages) {
    const packagePath = path.join(workspaceDir, pkg.location);

    const packageDefinition = await getPackageJson(packagePath);

    if (
      !packageDefinition.scripts ||
      !packageDefinition.scripts.hasOwnProperty(command)
    ) {
      options.verbose &&
        console.log(`⚠️  Skipped ${pkg.name} has no script ${command}`);
      continue;
    }

    const [fingerprint] = await getFingerprint(pkg.name, packagePath);

    const stdoutPathDir = path.join(
      process.cwd(),
      config.cache,
      Launcher.name,
      pkg.location,
      'result',
      command
    );
    const processResult = path.join(stdoutPathDir, fingerprint);

    const workspaceOutDir: [string, string][] = cachedAssets.map((dir) => {
      const packageDist = path.join(packagePath, dir);
      const cacheFolder = path.join(
        process.cwd(),
        config.cache,
        Launcher.name,
        pkg.location,
        command,
        fingerprint,
        dir
      );
      return [packageDist, cacheFolder];
    });

    await Promise.all(pkg.workspaceDependencies.map((dep) => dep));

    const previousProccessResult = await fs
      .readJson(processResult)
      .catch(() => undefined);

    if (previousProccessResult && previousProccessResult.exitCode !== 0) {
      return console.error(previousProccessResult.stderr);
    }

    // check if exists a folder for every single output dir
    const exists =
      options.force !== true &&
      (
        await Promise.all(
          workspaceOutDir.map(([_, cacheFolder]) => fs.pathExists(cacheFolder))
        )
      ).every((exists) => Boolean(exists));

    !options.force &&
      exists &&
      workspaceOutDir.length &&
      options.verbose &&
      console.log(
        `📦  ${command} ${pkg.name} fingerprint:${fingerprint} cache found`
      );
    !options.force &&
      !exists &&
      console.log(
        `📦  ${command} ${pkg.name} fingerprint:${fingerprint} no cache found`
      );
    options.force &&
      console.log(
        `📦  ${command} ${pkg.name} fingerprint:${fingerprint} cache forced`
      );

    // restore all folders from cache

    if (exists && workspaceOutDir.length) {
      await Promise.all(
        workspaceOutDir.map(([packageDist, cacheFolder]) => {
          if (packageDist) {
            fs.copy(cacheFolder, packageDist);
          }
          return undefined;
        })
      );
      options.verbose && console.log(`✅ ${pkg.name} cache restored`);
      continue;
    }

    if (exists && previousProccessResult) {
      options.verbose &&
        previousProccessResult.stdout &&
        console.log(previousProccessResult.stdout);
      continue;
    }

    options.verbose && console.log(`📦  ${command} ${pkg.name}`);

    fs.mkdirpSync(stdoutPathDir);

    const cmd = execa.commandSync(`yarn ${command}`, {
      cwd: packagePath,
    });

    fs.writeJSON(processResult, {
      exitCode: cmd.exitCode,
      stdout: cmd.stdout,
      stderr: cmd.stderr,
    });

    options.verbose && console.log(`✅ ${command} ${pkg.name} done`);

    await Promise.all(
      workspaceOutDir.map(([packageDist, cacheFolder]) => {
        options.verbose &&
          console.log(`📦  ${packageDist} ${cacheFolder} cache`);
        if (packageDist) {
          fs.copy(packageDist, cacheFolder);
        }
        return undefined;
      })
    );
  }
};

if (module === require.main) {
  run('build').catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
