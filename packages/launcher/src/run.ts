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

  for await (const pkg of packages) {
    if (!pkg.name || pkg.name === '@rocket.chat/fuselage-tokens') {
      continue;
    }
    const packagePath = path.join(cwd, pkg.location);

    const packageDefinition = (await readJson(
      path.join(packagePath, 'package.json')
    )) as IPackageJson;

    const packageDist = path.join(packagePath, 'dist');
    const [fingerprint] = await getFingerprint(pkg.name, packagePath, {});

    if (!fingerprint) {
      continue;
    }

    const cacheFolder = path.join(
      process.cwd(),
      config.cache,
      Launcher.name,
      pkg.location,
      fingerprint
    );

    const exists = await fs.pathExists(cacheFolder);

    console.log(
      `📦  ${pkg.name} fingerprint:${fingerprint} ${
        exists ? 'cache found' : 'no cache found'
      }`
    );

    if (
      !packageDefinition.scripts ||
      !packageDefinition.scripts.hasOwnProperty(command)
    ) {
      console.log(`⚠️  Skipped ${pkg.name} has no script ${command}`);
      continue;
    }

    if (exists) {
      await fs.copy(cacheFolder, packageDist); // restore from cache
      console.log(`✅ ${pkg.name} cache restored`);
      continue;
    }
    console.log(`📦  Building ${pkg.name}`);

    execa.commandSync(`yarn ${command}`, {
      cwd: packagePath,
      shell: true,
      preferLocal: true,
      stdout: 'inherit',
      stderr: 'inherit',
    });
    console.log(`✅ Building ${pkg.name} done`);

    await fs.copy(packageDist, cacheFolder); // restore from cache
  }
};

if (module === require.main) {
  run('build').catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
