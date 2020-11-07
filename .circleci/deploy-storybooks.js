#!/usr/bin/env node
'use strict';
const { spawn } = require('child_process');
const fs = require('fs-extra');
const ghPages = require('gh-pages');
const path = require('path');
const { promisify } = require('util');

const buildStorybook = async (packageName) => {
  const run = (...args) => new Promise((resolve, reject) => {
    try {
      const childProcess = spawn(...args);
      childProcess.on('close', (code) => {
        if (code === 0) {
          resolve();
        } else {
          reject(code);
        }
      });
    } catch (error) {
      reject(error);
    }
  });

  await run('node_modules/.bin/jest', [
    '--max-workers',
    '1',
    '--json',
    '--outputFile',
    path.join(__dirname, '../packages', packageName, '.storybook/jest-results.json')], {
    stdio: 'inherit',
    cwd: path.join(__dirname, '../packages', packageName),
  });

  await run('node_modules/.bin/build-storybook', ['-o', path.join(__dirname, '../static')], {
    stdio: 'inherit',
    cwd: path.join(__dirname, '../packages', packageName),
    env: { ...process.env, NODE_ENV: 'production' },
  });
};

const run = async () => {
  process.chdir(path.join(__dirname, '..'));

  console.log('Building static files directory...');
  await fs.ensureDir('static');

  console.log('Building Storybooks...');
  await buildStorybook('fuselage');

  console.log('Publishing...');
  const publish = promisify(ghPages.publish);
  const { GH_TOKEN } = process.env;
  await publish('static', {
    source: 'static/**/*',
    ...GH_TOKEN && { repo: `https://${ GH_TOKEN }@github.com/RocketChat/Rocket.Chat.Fuselage.git` },
    message: 'Deploy Storybook to Github Pages [skip ci]',
    user: {
      name: 'Guilherme Gazzo',
      email: 'guilherme.gazzo@rocket.chat',
    },
    silent: true,
  });
};

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
