#!/usr/bin/env node

import { promisify } from 'util';

import conventionalRecommendedBump from 'conventional-recommended-bump';
import latestVersion from 'latest-version';
import semver from 'semver';
import standardVersion from 'standard-version';
import { fs } from 'zx';

const getNextVersionFromManifest = async () => {
  const { version } = await fs.readJSON('./package.json');
  const currentVersion = semver.parse(version);

  const { releaseType } = await promisify(conventionalRecommendedBump)({
    path: '.',
    preset: 'angular',
  });
  currentVersion.inc(`pre${releaseType}`, 'dev');

  return currentVersion;
};

const getNextVersionFromRegistry = async () => {
  try {
    const { name } = await fs.readJSON('./package.json');
    const previousVersion = semver.parse(
      await latestVersion(name, { version: 'next' })
    );

    previousVersion.inc('prerelease', 'dev');

    return previousVersion;
  } catch (err) {
    return semver.parse('0.1.0-dev.0');
  }
};

const candidates = await Promise.all([
  getNextVersionFromManifest(),
  getNextVersionFromRegistry(),
]);

const nextVersion = semver.parse(
  semver
    .maxSatisfying(candidates, '*', {
      includePrerelease: true,
    })
    .format()
);

await standardVersion({
  dryRun: true,
  releaseAs: nextVersion.format(),
  skip: {
    changelog: true,
    commit: true,
    tag: true,
  },
});
