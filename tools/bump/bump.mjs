#!/usr/bin/env node
import standardVersion from 'standard-version';
import { $, glob, fs, argv } from 'zx';

const { workspaces } = await fs.readJSON('./package.json');

await standardVersion({
  dryRun: argv['dry-run'] === true,
  prerelease: argv.prerelease,
  skip: {
    bump: false,
    changelog: argv['no-changelog'] === true,
    commit: argv.commit !== true,
    tag: argv.tag !== true,
  },
  packageFiles: [
    {
      filename: './package.json',
      type: 'json',
    },
  ],
  bumpFiles: [
    {
      filename: './package.json',
      type: 'json',
    },
    {
      filename: './lerna.json',
      type: 'json',
    },
    ...(
      await glob(workspaces.map((workspace) => `${workspace}/package.json`))
    ).map((filename) => ({
      filename,
      type: 'json',
    })),
  ],
});

await $`prettier --write ./CHANGELOG.md`;

await $`yarn`;
