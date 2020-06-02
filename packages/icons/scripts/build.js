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
  glyphsMapping,
} = require('./font');
const { getIconDescriptors } = require('./icons');
const { logStep } = require('./log');
const { createSvgSprite, createSvgIcons } = require('./svg');

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
  icons = icons.filter(({ type }) => type !== 'other');

  const svgBuffer = await writeFile(distPath, 'font/rocketchat.svg', () => createSvgBuffer(icons));
  const ttfBuffer = await writeFile(distPath, 'font/rocketchat.ttf', () => createTtfBuffer(svgBuffer));
  await Promise.all([
    writeFile(distPath, 'font/rocketchat.woff', () => createWoffBuffer(ttfBuffer)),
    writeFile(distPath, 'font/rocketchat.woff2', () => createWoff2Buffer(ttfBuffer)),
    writeFile(distPath, 'font/rocketchat.eot', () => createEotBuffer(ttfBuffer)),
  ]);

  await writeFile(__dirname, '../glyphsMapping.json', () => glyphsMapping);
};

const buildSvgImages = async (icons, distPath) => {
  const svgIcons = await createSvgIcons(icons);
  await Promise.all([
    ...svgIcons.map(({ name, xml }) => writeFile(distPath, path.join('svg', `${ name }.svg`), () => xml)),
    writeFile(distPath, 'icons.svg', () => createSvgSprite(svgIcons)),
  ]);
};

const buildScripts = async (icons, distPath) => {
  await Promise.all([
    writeFile(distPath, path.basename(pkg.main), () => {
      const characters = icons
        .filter(({ name }) => !!glyphsMapping[name])
        .reduce((obj, { name }) => ({ ...obj, [name]: glyphsMapping[name].start }), {});
      return `module.exports = ${ JSON.stringify(characters, null, 2) };\n`;
    }),
    writeFile(distPath, 'rocketchat.css', () => [
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
  process.on('unhandledRejection', (err) => {
    console.error('unhandledRejection:', err.message);
    console.error(err.stack);
    process.exit(1);
  });

  const { srcPath, distPath } = await prepareDirectories();

  const icons = await getIconDescriptors(srcPath);

  await Promise.all([
    buildFont(icons, distPath),
    buildSvgImages(icons, distPath),
    buildScripts(icons, distPath),
  ]);
};

if (require.main === module) {
  buildAll();
}
