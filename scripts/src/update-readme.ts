// eslint-disable-next-line import/no-unresolved
import { readdir, readFile, writeFile } from 'fs/promises';
import { join } from 'path';

import prettier from 'prettier';

import { pkgReadme } from './readme-templates/pkgReadme';
import { rootReadme as rootTemplate } from './readme-templates/rootReadme';
import { replaceSections } from './readme-templates/section';
import { Package } from './types/Package';

const rootDir = join(__dirname, '../..');

const getPackages = async () => {
  const packagesDir = join(rootDir, 'packages');
  return Promise.all(
    (await readdir(packagesDir)).map(async (packageDirname) => {
      const manifestPath = join(packagesDir, packageDirname, 'package.json');
      return {
        dirname: packageDirname,
        ...JSON.parse(await readFile(manifestPath, { encoding: 'utf-8' })),
      } as Package;
    })
  );
};

const updateRootReadme = async (packageManifests: Package[]) => {
  const readmePath = join(rootDir, 'README.md');
  const readmeText = prettier.format(rootTemplate(packageManifests), {
    filepath: readmePath,
  });
  await writeFile(readmePath, readmeText, { encoding: 'utf-8' });
};

const updatePackageReadme = async (pkg: Package) => {
  const readmePath = join(rootDir, 'packages', pkg.dirname, 'README.md');

  const readmeContent = await readFile(readmePath, {
    encoding: 'utf-8',
  })
    .then(replaceSections(pkg), () => pkgReadme(pkg))
    .then((content) => prettier.format(content, { filepath: readmePath }));

  await writeFile(readmePath, readmeContent, { encoding: 'utf-8' });
};

const start = async () => {
  const packageManifests = await getPackages();
  await updateRootReadme(packageManifests);

  for (const packageManifest of packageManifests) {
    // eslint-disable-next-line no-await-in-loop
    await updatePackageReadme(packageManifest);
  }
};

start();
