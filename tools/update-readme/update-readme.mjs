#!/usr/bin/env node
import { $, fs, glob, path } from 'zx';

import { pkgReadme } from './templates/pkgReadme.mjs';
import { rootReadme } from './templates/rootReadme.mjs';
import { replaceSections } from './templates/section.mjs';

const pkgDirs = await glob('packages/*', { onlyDirectories: true });
const pkgs = await Promise.all(
  pkgDirs.map(async (dirPath) => ({
    ...(await fs.readJSON(`${dirPath}/package.json`)),
    dirname: path.basename(dirPath),
  }))
);

await fs.writeFile('README.md', rootReadme(pkgs));

await Promise.all(
  pkgs.map(async (pkg) => {
    const readmePath = `packages/${pkg.dirname}/README.md`;

    await fs
      .readFile(readmePath, 'utf-8')
      .then(replaceSections(pkg), () => pkgReadme(pkg))
      .then((content) => fs.writeFile(readmePath, content));
  })
);

await $`git add -vA README.md ${pkgs.map(
  (pkg) => `packages/${pkg.dirname}/README.md`
)}`;
