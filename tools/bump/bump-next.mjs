#!/usr/bin/env node

import { promisify } from 'util';

import conventionalRecommendedBump from 'conventional-recommended-bump';
import latestVersion from 'latest-version';
import pkgVersions from 'pkg-versions';
import semver from 'semver';
import standardVersion from 'standard-version';
import { argv, fs } from 'zx';

const { name, version } = await fs.readJSON('./package.json');

const publishedVersions = await pkgVersions(name);

const getNextVersionFromManifest = async () => {
  const nextVersion = semver.parse(version);

  const { releaseType } = await promisify(conventionalRecommendedBump)({
    path: '.',
    preset: 'angular',
  });
  nextVersion.inc(`pre${releaseType}`, 'dev');

  while (publishedVersions.has(nextVersion.format())) {
    nextVersion.inc('prerelease', 'dev');
  }

  return nextVersion;
};

const getNextVersionFromRegistry = async () => {
  try {
    const nextVersion = semver.parse(
      await latestVersion(name, { version: 'next' })
    );

    do {
      nextVersion.inc('prerelease', 'dev');
    } while (publishedVersions.has(nextVersion.format()));

    return nextVersion;
  } catch (err) {
    return semver.parse('0.1.0-dev.0');
  }
};

const candidates = await Promise.all([
  getNextVersionFromManifest(),
  getNextVersionFromRegistry(),
]);

const nextVersion = semver.maxSatisfying(candidates, '*', {
  includePrerelease: true,
});

await standardVersion({
  dryRun: argv['dry-run'] === true,
  releaseAs: nextVersion.format(),
  skip: {
    changelog: true,
    commit: true,
    tag: true,
  },
});
