#!/usr/bin/env node
import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toolRoot = path.resolve(__dirname, '..');
const packageDir = process.cwd();

const args = process.argv.slice(2);
const updateSnapshots = args.includes('--update-snapshots')
  ? '--update-snapshots'
  : '';
const buildDockerImage = args.includes('--build') ? '--build' : '';

if (process.env.CI) {
  execSync(
    `npx -y concurrently -k -s first -n "SB,TEST" "npx -y http-server storybook-static -s -p 6006" "npx -y wait-on tcp:127.0.0.1:6006 && PACKAGE_DIR=${packageDir} yarn workspace @rocket.chat/visual-regression playwright test --config=${toolRoot}/playwright.config.ts ${updateSnapshots}"`,
    { stdio: 'inherit', cwd: packageDir },
    {
      env: {
        ...process.env,
        PACKAGE_DIR: `${packageDir}`,
      },
    },
  );
} else {
  execSync(
    `npx -y concurrently -k -s first -n "SB,TEST" "yarn storybook -p 6006 --ci --host 0.0.0.0" "npx -y wait-on tcp:127.0.0.1:6006 && ${toolRoot}/scripts/run-playwright-docker.sh ${updateSnapshots} ${buildDockerImage}"`,
    {
      stdio: 'inherit',
      cwd: packageDir,
      env: { ...process.env, PACKAGE_DIR: packageDir },
    },
  );
}
