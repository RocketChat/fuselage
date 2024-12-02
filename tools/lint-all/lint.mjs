#!/usr/bin/env node
import { $, glob } from 'zx';

$.verbose = true;

await $`eslint`;

if ((await glob('.stylelintrc*')).length) {
  await $`stylelint --allow-empty-input '**/*.{css,scss}'`;
}

await $`prettier --plugin=@prettier/plugin-xml --check '**/*.{json,jsonc,md,yml,xml,svg}'`;

if ((await glob('tsconfig.json')).length) {
  await $`tsc --skipLibCheck --noEmit`;
}
