#!/usr/bin/env node
'use strict';
const { spawn } = require('child_process');
const fs = require('fs-extra');
const path = require('path');

const buildStorybook = async (packageName) => {
  const run = (...args) => new Promise((resolve, reject) => {
    const childProcess = spawn(...args);
    childProcess.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(code);
      }
    });
  });

  await run('node_modules/.bin/build-storybook', ['-o', path.join(__dirname, '../static', packageName)], {
    stdio: 'inherit',
    cwd: path.join(__dirname, '../packages', packageName),
  });
};

(async () => {
  process.chdir(path.join(__dirname, '..'));

  console.log('Building static files directory...');
  await fs.ensureDir('static');
  const html = '<!doctype html><meta http-equiv="Refresh" content="0; url=./livechat-admin/" />';
  await fs.outputFile('static/index.html', html);

  console.log('Building Storybooks...');
  await buildStorybook('fuselage');
  await buildStorybook('livechat-admin');
})();
