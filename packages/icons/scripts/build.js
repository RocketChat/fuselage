const path = require('path');
const { promisify } = require('util');

const rimraf = require('rimraf');

const pkg = require('../package.json');
const { writeFile } = require('./files');
const {
  createSvgBuffer,
  createTtfBuffer,
  createWoffBuffer,
  createWoff2Buffer,
  createEotBuffer,
} = require('./font');
const { getIcons } = require('./icons');
const { logStep } = require('./log');
const { createSvgSprite } = require('./svg');

const prepareDirectories = async () => {
  const rootPath = path.join(__dirname, '..');
  const distPath = path.join(rootPath, path.dirname(pkg.main));
  const srcPath = path.join(rootPath, 'src');

  const cleanStep = logStep('Clean dist directory');
  await promisify(rimraf)(distPath);
  cleanStep.resolve();

  return { srcPath, distPath };
};

const buildFont = async (icons, distPath) => {
  icons = icons.filter(({ startCharacter }) => !!startCharacter);

  const svgBuffer = await writeFile(distPath, 'font/rocketchat.svg', () => createSvgBuffer(icons));
  const ttfBuffer = await writeFile(distPath, 'font/rocketchat.ttf', () => createTtfBuffer(svgBuffer));
  await Promise.all([
    writeFile(distPath, 'font/rocketchat.woff', () => createWoffBuffer(ttfBuffer)),
    writeFile(distPath, 'font/rocketchat.woff2', () => createWoff2Buffer(ttfBuffer)),
    writeFile(distPath, 'font/rocketchat.eot', () => createEotBuffer(ttfBuffer)),
  ]);
};

const buildSvgImages = async (icons, distPath) => {
  await writeFile(distPath, 'icons.svg', () => createSvgSprite(icons));
};

const buildScripts = async (icons, distPath) => {
  await Promise.all([
    writeFile(distPath, path.basename(pkg.main), () => {
      const iconNames = icons.map(({ name }) => name);
      return `module.exports = ${ JSON.stringify(iconNames, null, 2) };\n`;
    }),
    writeFile(distPath, 'characters.js', () => {
      const characters = icons.reduce((obj, { name, startCharacter }) => ({ ...obj, [name]: startCharacter }), {});
      return `module.exports = ${ JSON.stringify(characters, null, 2) };\n`;
    }),
    writeFile(distPath, 'rocketchat.scss', () => [
      '@font-face {',
      '  font-family: "RocketChat";',
      '  font-style: normal;',
      '  font-weight: 400;',
      '  font-display: auto;',
      '',
      '  src: url("./font/rocketchat.eot");',
      '  src:',
      '    url("./font/rocketchat.eot?#iefix") format("embedded-opentype"),',
      '    url("./font/rocketchat.woff2") format("woff2"),',
      '    url("./font/rocketchat.woff") format("woff"),',
      '    url("./font/rocketchat.ttf") format("truetype"),',
      '    url("./font/rocketchat.svg#RocketChat") format("svg");',
      '}',
    ].join('\n')),
  ]);
};

const buildAll = async () => {
  const { srcPath, distPath } = await prepareDirectories();

  const icons = await getIcons(srcPath);

  await Promise.all([
    buildFont(icons, distPath),
    buildSvgImages(icons, distPath),
    buildScripts(icons, distPath),
  ]);
};

buildAll();
