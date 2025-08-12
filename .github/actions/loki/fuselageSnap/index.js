import { writeFileSync } from 'fs';

import * as core from '@actions/core';
import * as github from '@actions/github';

import { getAffectedComponents } from './src/getAffectedComponents.js';
import { getChangedFile } from './src/git/git.js';
import { readStatsFile } from './src/stats/readStatsFile.js';
import { trimStatsFile } from './src/stats/trimStatsFile.js';
import { copyFiles } from './src/utils/copyFiles.js';
import { generateRegex } from './src/utils/generateRegex.js';

// yarn build-storybook --stats-json gives project-stats.json which has component titles
// where as index.json gives the webpack base dependency graph
// index.js run from the root of the project
const { context } = github;
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

async function run(context) {
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
  if (context.eventName === 'pull_request') {
    const changedFiles = await getChangedFile(context);
    const data = await getAffectedComponents(changedFiles);
    const regex = generateRegex(data);
    const nonStatsFileName = await readStatsFile(
      '.github/actions/loki/fuselageSnap/dist/save.json',
    );
    const nonStryBkFiles = await readStatsFile(
      '.github/actions/loki/fuselageSnap/dist/non-storybook-files.json',
    );
    core.startGroup('click to see the changed files');
    console.log(changedFiles);
    core.endGroup();
    core.startGroup('click to see files that do not appear in storybook stats');
    console.log(nonStatsFileName.file_names);
    core.startGroup('click to see non storybook package files');
    console.log(nonStryBkFiles.file_names);
    core.endGroup();
    if (regex.fuselage.length === 0) {
      regex.fuselage = 'skip';
    }
    if (regex['fuselage-toastbar'].length === 0) {
      regex['fuselage-toastbar'] = 'skip';
    }
    if (regex.layout.length === 0) {
      regex.layout = 'skip';
    }
    if (regex['onboarding-ui'].length === 0) {
      regex['onboarding-ui'] = 'skip';
    }
    core.setOutput('fuselage', regex.fuselage);
    core.setOutput('fuselage-toastbar', regex['fuselage-toastbar']);
    core.setOutput('layout', regex.layout);
    core.setOutput('onboarding-ui', regex['onboarding-ui']);
  } else {
    core.error(
      'To use Loki fuselagesnap please use trigger events like pull request or push',
    );
  }
}
run(context);
