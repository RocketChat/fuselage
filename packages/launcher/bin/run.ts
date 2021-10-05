#!/usr/bin/env node
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// eslint-disable-next-line @typescript-eslint/no-unsafe-call,  @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-var-requires
require('../src/run').run(process.argv[2]);

console.log('Launcher started');
