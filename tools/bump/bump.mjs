#!/usr/bin/env node
import standardVersion from 'standard-version';
import { $, glob, fs, argv } from 'zx';

const { workspaces } = await fs.readJSON('./package.json');

const bumpFiles = await glob([
  './package.json',
  './lerna.json',
  ...workspaces.map((workspace) => `${workspace}/package.json`),
]);

await standardVersion({
  dryRun: argv['dry-run'] === true,
  skip: {
    bump: false,
    changelog: argv['no-changelog'] === true,
    commit: argv.commit !== true,
    tag: argv.tag !== true,
  },
  bumpFiles,
});

await $`prettier --write ./CHANGELOG.md`;
