import { writeFileSync } from 'fs';
import { execa } from 'execa';

import { getChangedFileLocal } from '../src/git_local.js';
import { getAffectedComponents } from '../../../.github/actions/loki/fuselageSnap/src/getAffectedComponents.js';
import { readStatsFile } from '../../../.github/actions/loki/fuselageSnap/src/stats/readStatsFile.js';
import { trimStatsFile } from '../../../.github/actions/loki/fuselageSnap/src/stats/trimStatsFile.js';
import { copyFiles } from '../../../.github/actions/loki/fuselageSnap/src/utils/copyFiles.js';
import { generateRegex } from '../../../.github/actions/loki/fuselageSnap/src/utils/generateRegex.js';

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
    const nonStatsFileName = await readStatsFile(
      '.github/actions/loki/fuselageSnap/dist/save.json',
    );
    const nonStryBkFiles = await readStatsFile(
      '.github/actions/loki/fuselageSnap/dist/non-storybook-files.json',
    );
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
    console.log(regex['fuselage']);
    console.log(regex['fuselage-toastbar']);
    console.log(regex['layout']);
    console.log(regex['onboarding-ui']);
}
run();
