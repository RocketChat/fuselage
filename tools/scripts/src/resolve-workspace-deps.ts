// eslint-disable-next-line import/no-unresolved
import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';

import fg from 'fast-glob';

const rootDir = join(__dirname, '../../..');

type PackageList = {
  [packageName: string]: string;
};

type PackageManifest = {
  dependencies?: PackageList;
  devDependencies?: PackageList;
  peerDependencies?: PackageList;
};

const patchPackageList = (
  packageList: PackageList | undefined,
  version: string
) => {
  if (!packageList) {
    return;
  }

  for (const [packageName, packageArg] of Object.entries(packageList)) {
    if (!packageArg.startsWith('workspace:')) {
      continue;
    }

    packageList[packageName] = `^${version}`;
  }
};

const patchPackageManifest = async (
  packageManifestsPath: string,
  version: string
) => {
  const packageManifest = JSON.parse(
    await readFile(packageManifestsPath, { encoding: 'utf-8' })
  ) as PackageManifest;

  patchPackageList(packageManifest.dependencies, version);
  patchPackageList(packageManifest.devDependencies, version);
  patchPackageList(packageManifest.peerDependencies, version);

  await writeFile(
    packageManifestsPath,
    JSON.stringify(packageManifest, null, 2),
    {
      encoding: 'utf-8',
    }
  );
};

const start = async () => {
  const { version } = JSON.parse(
    await readFile(join(rootDir, 'lerna.json'), { encoding: 'utf-8' })
  ) as { version: string };

  const packageManifestsPaths = await fg(
    ['**/package.json', '!**/node_modules/**/package.json', '!./package.json'],
    {
      cwd: rootDir,
    }
  );

  for (const packageManifestsPath of packageManifestsPaths) {
    patchPackageManifest(join(rootDir, packageManifestsPath), version);
  }
};

start();
