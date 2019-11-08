const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const rimraf = require('rimraf');

const pkg = require('../package.json');
const { buildFontIcons } = require('./font');
const { buildSvgIcons } = require('./svg');

const { log } = console;

const createDistributionDirectories = async () => {
  const rootPath = path.join(__dirname, '..');
  const distPath = path.join(rootPath, path.dirname(pkg.main));
  const fontPath = path.join(distPath, 'font');
  const svgPath = path.join(distPath, 'svg');
  const srcPath = path.join(rootPath, 'src');

  await promisify(rimraf)(distPath);

  await promisify(fs.mkdir)(fontPath, { recursive: true });
  await promisify(fs.mkdir)(svgPath, { recursive: true });

  return {
    fontPath,
    svgPath,
    srcPath,
  };
};

const buildAll = async () => {
  log('Creating distribution directories...');
  const {
    fontPath,
    svgPath,
    srcPath,
  } = await createDistributionDirectories();

  log('Building font...');
  await buildFontIcons(srcPath, fontPath);

  log('Building SVG sprite...');
  await buildSvgIcons(srcPath, svgPath);
};

buildAll();
