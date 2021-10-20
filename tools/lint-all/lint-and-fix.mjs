#!/usr/bin/env node
import { $, glob } from 'zx';

if ((await glob('.eslintrc*')).length) {
  await $`eslint --fix '**/*.{js,mjs,ts,tsx,mdx}'`;
}

if ((await glob('.stylelintrc*')).length) {
  await $`stylelint --allow-empty-input --fix '**/*.{css,scss}'`;
}

if ((await glob('.prettierrc*')).length) {
  await $`prettier --write '**/*.{json,jsonc,md,yml,xml,svg}'`;
}
