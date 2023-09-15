import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';

import fg from 'fast-glob';

const rootDir = join(__dirname, '../../..');

type PackageList = {
  [packageName: string]: string;
};

type PackageManifest = {
  name: string;
  version?: string;
  dependencies?: PackageList;
  devDependencies?: PackageList;
  peerDependencies?: PackageList;
};

const patchPackageList = (
  packageList: PackageList | undefined,
  packagesRefObj: Map<string, string | undefined>
) => {
  if (!packageList) {
    return;
  }

  for (const [packageName, packageArg] of Object.entries(packageList)) {
    if (!packageArg.startsWith('workspace:')) {
      continue;
    }

    packageList[packageName] = `^${packagesRefObj.get(packageName)}`;
  }
};

const getPackageManifest = async (packageManifestsPath: string) =>
  JSON.parse(
    await readFile(packageManifestsPath, { encoding: 'utf-8' })
  ) as PackageManifest;

const patchPackageManifest = async (
  packageManifestsPath: string,
  packagesRefObj: Map<string, string | undefined>
) => {
  const packageManifest = await getPackageManifest(packageManifestsPath);

  patchPackageList(packageManifest.dependencies, packagesRefObj);
  patchPackageList(packageManifest.devDependencies, packagesRefObj);
  patchPackageList(packageManifest.peerDependencies, packagesRefObj);

  await writeFile(
    packageManifestsPath,
    JSON.stringify(packageManifest, null, 2),
    {
      encoding: 'utf-8',
    }
  );
};

const start = async () => {
  const packageManifestsPaths = await fg(
    ['**/package.json', '!**/node_modules/**/package.json', '!./package.json'],
    {
      cwd: rootDir,
    }
  );

  const packagesRefObj = new Map(
    await Promise.all(
      packageManifestsPaths.map(async (packageManifestsPath) => {
        const packageManifest = await getPackageManifest(
          join(rootDir, packageManifestsPath)
        );
        return [packageManifest.name, packageManifest.version] as const;
      })
    )
  );

  for await (const packageManifestsPath of packageManifestsPaths) {
    patchPackageManifest(join(rootDir, packageManifestsPath), packagesRefObj);
  }
};

start();
