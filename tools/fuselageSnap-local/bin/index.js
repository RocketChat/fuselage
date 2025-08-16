import { spawn } from 'child_process';
import { writeFileSync } from 'fs';

import { execa } from 'execa';

import { getAffectedComponents } from '../../../.github/actions/loki/fuselageSnap/src/getAffectedComponents.js';
import { mergePkgsObj } from '../../../.github/actions/loki/fuselageSnap/src/getIndirectDependency.js';
import { trimStatsFile } from '../../../.github/actions/loki/fuselageSnap/src/stats/trimStatsFile.js';
import { copyFiles } from '../../../.github/actions/loki/fuselageSnap/src/utils/copyFiles.js';
import { generateRegex } from '../../../.github/actions/loki/fuselageSnap/src/utils/generateRegex.js';
import { getChangedFileLocal } from '../src/git_local.js';
// yarn build-storybook --stats-json gives project-stats.json which has component titles
// where as index.json gives the webpack base dependency graph
// index.js run from the root of the project
const filesToCopy = [
  {
    src: './packages/fuselage/storybook-static/index.json',
    dest: '.github/actions/loki/fuselageSnap/dist/fuselage-sb.json',
  },
  {
    src: './packages/fuselage-toastbar/storybook-static/index.json',
    dest: '.github/actions/loki/fuselageSnap/dist/fuselage-toastbar-sb.json',
  },
  {
    src: './packages/onboarding-ui/storybook-static/index.json',
    dest: '.github/actions/loki/fuselageSnap/dist/onboarding-ui-sb.json',
  },
  {
    src: './packages/layout/storybook-static/index.json',
    dest: '.github/actions/loki/fuselageSnap/dist/layout-sb.json',
  },
  {
    src: './packages/fuselage/storybook-static/preview-stats.json',
    dest: '.github/actions/loki/fuselageSnap/dist/fuselage-stats.json',
  },
  {
    src: './packages/fuselage-toastbar/storybook-static/preview-stats.json',
    dest: '.github/actions/loki/fuselageSnap/dist/fuselage-toastbar-stats.json',
  },
  {
    src: './packages/onboarding-ui/storybook-static/preview-stats.json',
    dest: '.github/actions/loki/fuselageSnap/dist/onboarding-ui-stats.json',
  },
  {
    src: './packages/layout/storybook-static/preview-stats.json',
    dest: '.github/actions/loki/fuselageSnap/dist/layout-stats.json',
  },
];

export const execCommand = (command) => {
  return new Promise((resolve, reject) => {
    const childProcess = spawn(command, {
      stdio: 'inherit',
      shell: true,
    });
    childProcess.on('error', (error) => {
      reject(error);
    });
    childProcess.on('exit', () => {
      resolve();
    });
  });
};

writeFileSync(
  '.github/actions/loki/fuselageSnap/dist/save.json',
  '{"file_names":[]}',
  function (err) {
    if (err) {
      return console.log(err);
    }
    console.log('The file was saved!');
  },
);
writeFileSync(
  '.github/actions/loki/fuselageSnap/dist/non-storybook-files.json',
  '{"file_names":[]}',
  function (err) {
    if (err) {
      return console.log(err);
    }
    console.log('The file was saved!');
  },
);
async function copyFilesToDest(filesToCopy, location) {
  const promises = [];
  for (const pkg of location) {
    for (const { src, dest } of filesToCopy) {
      if (src.split('/')[2] === pkg) {
        copyFiles(src, dest);
        if (dest.includes('stats')) {
          const trimmedPath = `.github/actions/loki/fuselageSnap/dist/trimmed-${dest.split('/').slice(-1)}`;
          promises.push(trimStatsFile(dest, trimmedPath));
        }
      }
    }
  }

  await Promise.all(promises);
}
async function run() {
  const buildStoryBookPromises = [];
  const headCommit = await execa`git rev-parse HEAD`;
  const changedFiles = await getChangedFileLocal(headCommit.stdout);
  const storyBookPkgs = new Set();
  for (const file of changedFiles) {
    if (file.includes('packages')) {
      if (file.split('/')[1] === 'fuselage') {
        storyBookPkgs.add('fuselage');
        break;
      }
      storyBookPkgs.add(file.split('/')[1]);
      const pkgMap = mergePkgsObj(file.split('/')[1]);
      for (const pkgName of pkgMap) {
        storyBookPkgs.add(Object.keys(pkgName)[0]);
      }
    }
    if (file.includes('yarn.lock') || file.includes('package.json')) {
      storyBookPkgs.add('fuselage');
    }
  }
  for (const pkg of storyBookPkgs) {
    if (pkg === 'fuselage') {
      storyBookPkgs.delete('fuselage-toastbar');
      storyBookPkgs.delete('layout');
      storyBookPkgs.delete('onboarding-ui');
    } else if (pkg === 'layout') {
      storyBookPkgs.delete('fuselage-toastbar');
      storyBookPkgs.delete('onboarding-ui');
    }
  }
  const storyBookFilesToCopy = [];
  for (const pkg of storyBookPkgs) {
    if (pkg === 'fuselage') {
      buildStoryBookPromises.push(execCommand('yarn build-storybook'));
      storyBookFilesToCopy.push('fuselage');
      storyBookFilesToCopy.push('fuselage-toastbar');
      storyBookFilesToCopy.push('layout');
      storyBookFilesToCopy.push('onboarding-ui');
      break;
    } else if (pkg === 'fuselage-toastbar') {
      buildStoryBookPromises.push(
        execCommand('cd packages/fuselage-toastbar && yarn build-storybook'),
      );
      storyBookFilesToCopy.push('fuselage-toastbar');
    } else if (pkg === 'layout') {
      buildStoryBookPromises.push(
        execCommand('cd packages/fuselage-toastbar && yarn build-storybook'),
      );
      buildStoryBookPromises.push(
        execCommand('cd packages/onboarding-ui && yarn build-storybook'),
      );
      buildStoryBookPromises.push(
        execCommand('cd packages/layout && yarn build-storybook'),
      );
      storyBookFilesToCopy.push('fuselage-toastbar');
      storyBookFilesToCopy.push('onboarding-ui');
      storyBookFilesToCopy.push('layout');
    } else if (pkg === 'onboarding-ui') {
      buildStoryBookPromises.push(
        execCommand('cd packages/onboarding-ui && yarn build-storybook'),
      );
      storyBookFilesToCopy.push('onboarding-ui');
    }
  }
  await Promise.all(buildStoryBookPromises);
  if (storyBookFilesToCopy.length > 0) {
    await copyFilesToDest(filesToCopy, storyBookFilesToCopy);
  }
  const data = await getAffectedComponents(changedFiles);
  const regex = generateRegex(data);
  const pkgs = ['fuselage', 'fuselage-toastbar', 'layout', 'onboarding-ui'];

  const colorize = (...args) => ({
    black: `\x1b[30m${args.join(' ')}`,
    red: `\x1b[31m${args.join(' ')}`,
    green: `\x1b[32m${args.join(' ')}`,
    yellow: `\x1b[33m${args.join(' ')}`,
    blue: `\x1b[34m${args.join(' ')}`,
    magenta: `\x1b[35m${args.join(' ')}`,
    cyan: `\x1b[36m${args.join(' ')}`,
    white: `\x1b[37m${args.join(' ')}`,
    bgBlack: `\x1b[40m${args.join(' ')}\x1b[0m`,
    bgRed: `\x1b[41m${args.join(' ')}\x1b[0m`,
    bgGreen: `\x1b[42m${args.join(' ')}\x1b[0m`,
    bgYellow: `\x1b[43m${args.join(' ')}\x1b[0m`,
    bgBlue: `\x1b[44m${args.join(' ')}\x1b[0m`,
    bgMagenta: `\x1b[45m${args.join(' ')}\x1b[0m`,
    bgCyan: `\x1b[46m${args.join(' ')}\x1b[0m`,
    bgWhite: `\x1b[47m${args.join(' ')}\x1b[0m`,
  });
  /* eslint-disable no-await-in-loop */
  for (const pkg of pkgs) {
    if (regex[`${pkg}`].length === 0) {
      console.log(
        colorize(`skipping ${pkg} no affected components found`).bgBlue,
      );
    } else if (regex[`${pkg}`] === 'full test') {
      console.log(colorize(`Running full visual tests for ${pkg}`).bgBlue);
      await execCommand(`cd packages/${pkg} && yarn loki:test`);
    } else {
      console.log(colorize(`Running fuselageSnap for ${pkg}`).bgBlue);
      await execCommand(
        `cd packages/${pkg} && yarn loki:test --storiesFilter="${regex[pkg]}"`,
      );
    }
  }
}
run();
