/* eslint-disable import/no-dynamic-require */
import path from 'path';
import util from 'util';

import execa from 'execa';
import fs from 'fs-extra';
import { IPackageJson } from 'package-json-type';

import Launcher from '../package.json';
import { getFingerprint } from './fingerprint';
import { getPackages } from './workspace';

const readJson = util.promisify(fs.readJson);

// eslint-disable-next-line @typescript-eslint/no-var-requires

const config = {
  cache: 'node_modules/.cache',
  name: Launcher.name,
};

export const run = async (
  command: string,
  cwd = process.cwd()
): Promise<void> => {
  const packages = await getPackages(cwd);

  if (!command) {
    throw new Error('No command provided');
  }

  const packageWorkspaceJson = (await readJson(
    path.join(cwd, 'package.json')
  )) as IPackageJson;

  const cachedAssets: string[] =
    packageWorkspaceJson['rc-launcher'][command] || [];

  for await (const pkg of packages) {
    if (!pkg.name || pkg.name === '@rocket.chat/fuselage-tokens') {
      continue;
    }

    const packagePath = path.join(cwd, pkg.location);

    const packageDefinition = (await readJson(
      path.join(packagePath, 'package.json')
    )) as IPackageJson;

    const [fingerprint] = await getFingerprint(pkg.name, packagePath, {});

    if (!fingerprint) {
      continue;
    }

    if (
      !packageDefinition.scripts ||
      !packageDefinition.scripts.hasOwnProperty(command)
    ) {
      console.log(`⚠️  Skipped ${pkg.name} has no script ${command}`);
      continue;
    }

    const stdoutPathDir = path.join(
      process.cwd(),
      config.cache,
      Launcher.name,
      pkg.location,
      'stdout',
      command
    );
    const stdoutPath = path.join(stdoutPathDir, fingerprint);

    const packageCachedAssets: [string, string][] = cachedAssets.map((dir) => {
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
    packageCachedAssets.push(['', stdoutPathDir]);
    const exists = (
      await Promise.all(
        packageCachedAssets.map(([_, cacheFolder]) =>
          fs.pathExists(cacheFolder)
        )
      )
    ).every((exists) => Boolean(exists));

    console.log(
      `📦  ${command} ${pkg.name} fingerprint:${fingerprint} ${
        exists ? 'cache found' : 'no cache found'
      }`
    );

    if (exists) {
      await Promise.all(
        packageCachedAssets.map(([packageDist, cacheFolder]) => {
          if (packageDist) {
            fs.copy(cacheFolder, packageDist);
          }
          return undefined;
        })
      );
      // restore from cache
      console.log(`✅ ${pkg.name} cache restored`);
      continue;
    }
    console.log(`📦  ${command} ${pkg.name}`);

    fs.mkdirpSync(stdoutPathDir);

    const stdout = fs.createWriteStream(stdoutPath, { flags: 'w' });

    const cmd = execa.commandSync(`yarn ${command}`, {
      cwd: packagePath,
    });

    stdout.write(cmd.stdout);
    stdout.end();

    console.log(`✅ ${command} ${pkg.name} done`);

    await Promise.all(
      packageCachedAssets.map(([packageDist, cacheFolder]) => {
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
