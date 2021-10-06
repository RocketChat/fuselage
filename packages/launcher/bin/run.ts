#!/usr/bin/env node
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// eslint-disable-next-line @typescript-eslint/no-unsafe-call,  @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-var-requires
require('../src/run').run(process.argv[2], process.cwd(), {
  force: process.argv.includes('--force'),
  verbose: true || process.argv.includes('--verbose'),
  exclude: ['@rocket.chat/fuselage-tokens'],
  // packages: ['@rocket.chat/launcher'],
});
