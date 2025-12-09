#!/usr/bin/env node
import { $, glob } from 'zx';

$.verbose = true;

await $`eslint --fix`;

if ((await glob('.stylelintrc*')).length) {
  await $`stylelint --allow-empty-input --fix '**/*.{css,scss}'`;
}

await $`prettier --plugin=@prettier/plugin-xml --write '**/*.{json,jsonc,md,yml,xml,svg}'`;
