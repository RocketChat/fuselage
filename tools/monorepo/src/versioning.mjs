import npmRegistryFetch from 'npm-registry-fetch';
import semver from 'semver';

import { parseCommitMessage } from './conventionalCommits.mjs';

const initialTag = 'v0.0.0';

const getLatestVersion = async ({ tag }) => ({
  version: semver.clean(tag),
});

const getPreReleaseId = async (npmTag) => {
  const response = await npmRegistryFetch.json('/@rocket.chat/fuselage');
  return semver.prerelease(response['dist-tags'][npmTag]);
};

const getNextVersion = async ({ tag }) => {
  const [preid, preidCount] = (await getPreReleaseId('next')) ?? ['dev', 0];

  return {
    version: `${semver.clean(tag)}-${preid}.${preidCount}`,
    preid,
  };
};

const getAlphaVersion = async ({ tag, build }) => {
  const [preid, preidCount] = (await getPreReleaseId('alpha')) ?? ['alpha', 0];

  return {
    version: `${semver.clean(tag)}-${preid}.${preidCount}+${build}`,
    preid,
    build,
  };
};

export const getVersion = async ({
  currentBranch,
  latestTag,
  latestCommit,
}) => {
  const tag = latestTag ?? initialTag;

  if (currentBranch === 'master' || currentBranch === 'main') {
    return getLatestVersion({ tag });
  }

  if (currentBranch === 'develop') {
    return getNextVersion({ tag });
  }

  const build = latestCommit.hash.slice(0, 8);

  return getAlphaVersion({ tag, build });
};

const isBreakingChange = (conventionalCommit) =>
  conventionalCommit.notes.some(({ title }) => title === 'BREAKING CHANGE');

const isNewFeature = (commit) => commit.type === 'feat';

const getReleaseType = ({ conventionalCommits, preid }) => {
  if (conventionalCommits.some(isBreakingChange)) {
    return [preid !== undefined ? 'premajor' : 'major', preid];
  }

  if (conventionalCommits.some(isNewFeature)) {
    return [preid !== undefined ? 'preminor' : 'minor', preid];
  }

  return [preid !== undefined ? 'prepatch' : 'patch', preid];
};

export const bumpVersion = async ({ version, preid, build, commits }) => {
  const conventionalCommits = commits.map(({ message }) =>
    parseCommitMessage(message)
  );

  const releaseType = getReleaseType({ conventionalCommits, preid });

  if (!build) {
    return semver.inc(version, ...releaseType);
  }

  return `${semver.inc(version, ...releaseType)}+${build}`;
};
