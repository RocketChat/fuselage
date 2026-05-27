#!/usr/bin/env node
/**
 * typecheck.mjs — thin TYPE GATE wrapper.
 *
 * Spawns `tsc --noEmit` and streams its output, then exits with tsc's exit code.
 * This is the type gate: it validates emitted JSX against the consumer's installed
 * Fuselage types. It doesn't know anything about Fuselage values — correctness comes
 * from the consumer's own TypeScript project and installed Fuselage type declarations.
 *
 * Usage:
 *   node typecheck.mjs                     # uses tsconfig.json in cwd
 *   node typecheck.mjs -p tsconfig.app.json
 *   node typecheck.mjs --project tsconfig.app.json
 */

import { spawn } from 'child_process';
import { argv, exit } from 'process';

const args = argv.slice(2);

// Build tsc command args: --noEmit plus any -p / --project forwarding
const tscArgs = ['--noEmit'];

for (let i = 0; i < args.length; i++) {
  const arg = args[i];
  if (arg === '-p' || arg === '--project') {
    tscArgs.push(arg);
    if (args[i + 1]) {
      tscArgs.push(args[i + 1]);
      i++;
    }
  } else {
    // Forward any other flags as-is
    tscArgs.push(arg);
  }
}

const child = spawn('npx', ['tsc', ...tscArgs], {
  stdio: 'inherit',
  shell: false,
});

child.on('close', (code) => {
  exit(code ?? 1);
});

child.on('error', (err) => {
  process.stderr.write(`typecheck.mjs: failed to spawn tsc: ${err.message}\n`);
  exit(1);
});
