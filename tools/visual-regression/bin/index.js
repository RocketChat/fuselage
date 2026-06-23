#!/usr/bin/env node
import { execFileSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toolRoot = path.resolve(__dirname, '..');
const packageDir = process.cwd();

const runx = 'yarn dlx';
const run = 'yarn run';

const args = process.argv.slice(2);
const updateSnapshots = args.includes('--update-snapshots')
  ? '--update-snapshots'
  : '';

const runPlaywrightScript = path.join(
  toolRoot,
  'scripts',
  'run-playwright-docker.sh',
);

if (process.env.CI) {
  execFileSync(
    'sh',
    [
      '-c',
      `${runx} concurrently -k -s first -n "SB,TEST" "${runx} http-server storybook-static -s -p 6006" "${runx} wait-on tcp:127.0.0.1:6006 && ${runPlaywrightScript} ${updateSnapshots}"`,
    ],
    {
      stdio: 'inherit',
      cwd: packageDir,
      env: { ...process.env, PACKAGE_DIR: `${packageDir}` },
    },
  );
} else {
  execFileSync(
    'sh',
    [
      '-c',
      `${runx} concurrently -k -s first -n "SB,TEST" "${run} build-storybook && ${runx} http-server storybook-static -s -p 6006" "${runx} wait-on tcp:127.0.0.1:6006 && ${runPlaywrightScript} ${updateSnapshots}"`,
    ],
    {
      stdio: 'inherit',
      cwd: packageDir,
      env: { ...process.env, PACKAGE_DIR: packageDir },
    },
  );
}
