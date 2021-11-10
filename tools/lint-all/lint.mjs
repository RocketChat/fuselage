#!/usr/bin/env node
import { $, glob } from 'zx';

if ((await glob('.eslintrc*')).length) {
  await $`eslint '**/*.{js,mjs,ts,tsx,mdx}'`;
}

if ((await glob('.stylelintrc*')).length) {
  await $`stylelint --allow-empty-input '**/*.{css,scss}'`;
}

if ((await glob('.prettierrc*')).length) {
  await $`prettier --check '**/*.{json,jsonc,md,yml,xml,svg}'`;
}

if ((await glob('tsconfig.json')).length) {
  await $`tsc --skipLibCheck --noEmit`;
}
