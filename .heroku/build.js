#!/usr/bin/env node
'use strict';
const fs = require('fs-extra');
const path = require('path');
const storybook = require('@storybook/react/standalone');

const buildStorybook = async (packageName) => {
  process.chdir(path.join(__dirname, '../packages', packageName));
  await storybook({
    mode: 'static',
    configDir: path.join(__dirname, '../packages', packageName, '.storybook'),
    outputDir: path.join(__dirname, '../static', packageName),
  });

  process.chdir(path.join(__dirname, '..'));
};

(async () => {
  process.chdir(path.join(__dirname, '..'));

  console.log('Building static files directory...');
  await fs.ensureDir('static');
  await fs.outputFile('static/index.html',
    '<!doctype html><meta http-equiv="Refresh" content="0; url=https://rocket.chat" />');

  console.log('Building Storybooks...');
  await buildStorybook('fuselage');
  await buildStorybook('livechat-admin');
})();
