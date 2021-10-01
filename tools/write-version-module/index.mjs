#!/usr/bin/env node

import { readFile, writeFile } from 'fs/promises';

const pkg = JSON.parse(await readFile('./package.json', 'utf-8'));

await writeFile(
  './src/version.ts',
  `export default '${pkg.version}';\n`,
  'utf-8'
);
