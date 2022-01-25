import { writeBinary, writeSource } from 'tools-utils/files';
import { encodeJson } from 'tools-utils/json';
import { runEslint, runStylelint } from 'tools-utils/source';
import {
  createSvgBuffer,
  createTtfBuffer,
  createWoffBuffer,
  createWoff2Buffer,
  createEotBuffer,
} from './font.mjs';
import { createSvgSprite, createSvgIcons } from './svg.mjs';
import { getMappedGlyphs } from './glyphs.mjs';

const filterOtherIconsOut = (icons) =>
  icons.filter(({ type }) => type !== 'other');

export const buildSvgImages = (icons) =>
  createSvgIcons(icons).then((svgIcons) =>
    Promise.all([
      ...svgIcons.map(({ name, xml }) =>
        writeSource(`./dist/svg/${name}.svg`)(xml)
      ),
      createSvgSprite(svgIcons).then(writeSource('./dist/icons.svg')),
    ])
  );

export const buildCss = () =>
  Promise.resolve(
    `
      @font-face {
        font-family: 'RocketChat';
        font-style: normal;
        font-weight: 400;
        font-display: auto;

        src: url('./font/rocketchat.eot');
        src:
          url('./font/rocketchat.eot?#iefix') format('embedded-opentype'),
          url('./font/rocketchat.woff2') format('woff2'),
          url('./font/rocketchat.woff') format('woff'),
          url('./font/rocketchat.ttf') format('truetype'),
          url('./font/rocketchat.svg#RocketChat') format('svg');
      }
    `
  )
    .then(runStylelint('rocketchat.css'))
    .then(writeSource('dist/rocketchat.css'));

const fromIconDescriptorsToCharacters = (icons) =>
  getMappedGlyphs()
    .then((glyphsMapping) =>
      icons
        .filter(({ name }) => !!glyphsMapping[name])
        .map(({ name }) => [name, glyphsMapping[name].start])
    )
    .then(Object.fromEntries);

export const buildCommonJsModule = (icons) =>
  Promise.resolve(icons)
    .then(fromIconDescriptorsToCharacters)
    .then((characters) => `module.exports = ${encodeJson(characters)};`)
    .then(runEslint('index.cjs'))
    .then(writeSource('dist/index.js'));

export const buildEsmModule = (icons) =>
  Promise.resolve(icons)
    .then(fromIconDescriptorsToCharacters)
    .then((characters) => `export default ${encodeJson(characters)};`)
    .then(runEslint('index.mjs'))
    .then(writeSource('dist/index.mjs'));

export const buildFont = (icons) =>
  Promise.resolve(icons)
    .then(filterOtherIconsOut)
    .then(createSvgBuffer)
    .then(writeBinary('./dist/font/rocketchat.svg'))
    .then(createTtfBuffer)
    .then(writeBinary('./dist/font/rocketchat.ttf'))
    .then((ttfBuffer) =>
      Promise.all([
        createWoffBuffer(ttfBuffer).then(
          writeBinary('./dist/font/rocketchat.woff')
        ),
        createWoff2Buffer(ttfBuffer).then(
          writeBinary('./dist/font/rocketchat.woff2')
        ),
        createEotBuffer(ttfBuffer).then(
          writeBinary('./dist/font/rocketchat.eot')
        ),
      ])
    );

export const buildDefinition = (icons) => {
  Promise.resolve(icons)
    .then(fromIconDescriptorsToCharacters)
    .then((characters) => {
      return `declare const Icons= ${encodeJson(characters)};
export default Icons;
export type Keys = keyof typeof Icons;`;
    })
    // .then(runEslint('index.d.ts'))
    .then(writeSource('dist/index.d.ts'))
    .catch(console.log);
};
