import { spawn } from 'child_process';
import { writeFileSync } from 'fs';

import { execa } from 'execa';

import { getAffectedComponents } from '../../../.github/actions/loki/fuselageSnap/src/getAffectedComponents.js';
import { trimStatsFile } from '../../../.github/actions/loki/fuselageSnap/src/stats/trimStatsFile.js';
import { copyFiles } from '../../../.github/actions/loki/fuselageSnap/src/utils/copyFiles.js';
import { generateRegex } from '../../../.github/actions/loki/fuselageSnap/src/utils/generateRegex.js';
import { getChangedFileLocal } from '../src/git_local.js';

// yarn build-storybook --stats-json gives project-stats.json which has component titles
// where as index.json gives the webpack base dependency graph
// index.js run from the root of the project
export const execCommand = (command) => {
  return new Promise((resolve, reject) => {
    const childProcess = spawn(command, {
      stdio: 'inherit',
      shell: true,
    });
    childProcess.on('error', (error) => {
      reject(error);
    });
    childProcess.on('exit', (code) => {
      resolve();
    });
  });
};
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

async function run() {
  // getTrimmedstats
  const promises = [];
  for (const { src, dest } of filesToCopy) {
    copyFiles(src, dest);
    if (dest.includes('stats')) {
      const trimmedPath = `.github/actions/loki/fuselageSnap/dist/trimmed-${dest.split('/').slice(-1)}`;
      promises.push(trimStatsFile(dest, trimmedPath));
    }
  }

  await Promise.all(promises);
  const headCommit = await execa`git rev-parse HEAD`;
  const changedFiles = await getChangedFileLocal(headCommit.stdout);
  const data = await getAffectedComponents(changedFiles);
  const regex = generateRegex(data);

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
  console.log(
    colorize('Remember to git add . your changes before running fuselageSnap')
      .magenta,
  );
  if (regex.fuselage.length === 0) {
    console.log(
      colorize('skipping fuselage no affected components found').green,
    );
  } else if (regex.fuselage === 'full test') {
    console.log(colorize('Running full visual tests for fuselage').green);
    await execCommand('cd packages/fuselage && yarn loki:test');
  } else {
    console.log(colorize('Running fuselageSnap for fuselage ').green);
    await execCommand(
      `cd packages/fuselage && yarn loki:test --storiesFilter="${regex.fuselage}"`,
    );
  }


  if (regex['fuselage-toastbar'].length === 0) {
    console.log(
      colorize('skipping fuselage-toastbar no affected components found').green,
    );
  } else if (regex['fuselage-toastbar'] === 'full test') {
    console.log(
      colorize('Running full visual tests for fuselage-toastbar').green,
    );
    await execCommand('cd packages/fuselage-toastbar && yarn loki:test');
  } else {
    console.log(colorize('Running fuselageSnap for fuselage-toastbar ').bgBlue);
    await execCommand(
      `cd packages/fuselage-toastbar && yarn loki:test --storiesFilter="${regex['fuselage-toastbar']}"`,
    );
  }

  if (regex.layout.length === 0) {
    console.log(colorize('skipping layout no affected components found').green);
  } else if (regex.layout === 'full test') {
    console.log(colorize('Running full visual tests for layout').green);
    await execCommand('cd packages/layout && yarn loki:test');
  } else {
    console.log(colorize('Running fuselageSnap for layout ').bgBlue);
    await execCommand(
      `cd packages/layout && yarn loki:test --storiesFilter="${regex.layout}"`,
    );
  }

  if (regex['onboarding-ui'].length === 0) {
    console.log(
      colorize('skipping onboarding-ui no affected components found').green,
    );
  } else if (regex['onboarding-ui'] === 'full test') {
    console.log(colorize('Running full visual tests for onboarding-ui').green);
    await execCommand('cd packages/onboarding-ui && yarn loki:test');
  } else {
    console.log(colorize('Running fuselageSnap for onboarding-ui ').bgBlue);
    await execCommand(
      `cd packages/onboarding-ui && yarn loki:test --storiesFilter="${regex['onboarding-ui']}"`,
    );
  }
}
run();
