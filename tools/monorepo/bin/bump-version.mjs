#!/usr/bin/env node
import { git } from '../src/git.mjs';
import { getVersion, bumpVersion } from '../src/versioning.mjs';

await git.fetch('origin', {
  '--tags': true,
  '--prune-tags': true,
});

const { current: currentBranch } = await git.branch();
const { latest: latestTag } = await git.tags();
const { latest: latestCommit, all: commits } = await git.log({
  from: latestTag,
  to: currentBranch,
});

const { version, preid, build } = await getVersion({
  currentBranch,
  latestTag,
  latestCommit,
});

console.log({
  currentVersion: version,
  newVersion: await bumpVersion({ version, preid, build, commits }),
});
