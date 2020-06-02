const SVGIcons2SVGFontStream = require('svgicons2svgfont');
const svg2ttf = require('svg2ttf');
const ttf2eot = require('ttf2eot');
const ttf2woff = require('ttf2woff');
const ttf2woff2 = require('ttf2woff2');
const {
  Ps: punctuationStartCharacters,
  Pe: punctuationEndCharacters,
  Pi: initialPunctuationCharacters,
  Pf: finalPunctuationCharacters,
} = require('unicode/category');

const pkg = require('../package.json');
const glyphsMapping = require('../glyphsMapping.json');
const { readFile, createReadableFromString } = require('./files');
const { mirrorSvg } = require('./svg');

const startCharacters = [
  ...Object.values(punctuationStartCharacters).filter(({ mirrored }) => mirrored === 'Y').map(({ symbol }) => symbol),
  ...Object.values(initialPunctuationCharacters).filter(({ mirrored }) => mirrored === 'Y').map(({ symbol }) => symbol),
];

const endCharacters = [
  ...Object.values(punctuationEndCharacters).filter(({ mirrored }) => mirrored === 'Y').map(({ symbol }) => symbol),
  ...Object.values(finalPunctuationCharacters).filter(({ mirrored }) => mirrored === 'Y').map(({ symbol }) => symbol),
];

let directionalCounter = 0;
let neutralCounter = 0;

const nextCharactersFor = (name, type) => {
  if (glyphsMapping[name]) {
    return glyphsMapping[name];
  }

  if (type === 'dir') {
    const i = directionalCounter++;

    if (startCharacters.length <= i) {
      throw Error('more directional icons than possible');
    }

    glyphsMapping[name] = {
      start: startCharacters[i],
      end: endCharacters[i],
    };
  }

  if (!type) {
    const i = neutralCounter++;
    glyphsMapping[name] = {
      start: String.fromCodePoint(0xe000 + i),
    };
  }

  return glyphsMapping[name];
};

const createSvgBuffer = async (icons) => {
  const fontStream = new SVGIcons2SVGFontStream({
    fontName: 'RocketChat',
    fontHeight: 1024,
    normalize: true,
    log: () => {},
  });

  await Promise.all(
    icons.map(async ({ name, type, path }) => {
      const content = await readFile(path);
      const { start: startCharacter, end: endCharacter } = nextCharactersFor(name, type);

      const stream = createReadableFromString(content);
      stream.metadata = {
        name,
        unicode: [startCharacter],
      };

      fontStream.write(stream);

      if (endCharacter) {
        const stream = createReadableFromString(await mirrorSvg(content));
        stream.metadata = {
          name: `${ name }-mirror`,
          unicode: [endCharacter],
        };

        fontStream.write(stream);
      }
    }),
  );

  return new Promise((resolve, reject) => {
    const buffers = [];

    fontStream
      .on('data', (data) => buffers.push(data))
      .on('error', (error) => reject(error))
      .on('finish', () => resolve(Buffer.concat(buffers)));

    fontStream.end();
  });
};

const createTtfBuffer = (svgBuffer) => Buffer.from(svg2ttf(svgBuffer.toString('utf8'), {
  copyright: pkg.copyright,
  description: pkg.description,
  url: pkg.homepage,
  version: pkg.version.split('.').slice(0, 2).join('.'),
}).buffer);

const createWoffBuffer = (ttfBuffer) => Buffer.from(ttf2woff(new Uint8Array(ttfBuffer)).buffer);

const createWoff2Buffer = (ttfBuffer) => Buffer.from(ttf2woff2(new Uint8Array(ttfBuffer)).buffer);

const createEotBuffer = (ttfBuffer) => Buffer.from(ttf2eot(new Uint8Array(ttfBuffer)).buffer);

module.exports.createSvgBuffer = createSvgBuffer;
module.exports.createTtfBuffer = createTtfBuffer;
module.exports.createWoffBuffer = createWoffBuffer;
module.exports.createWoff2Buffer = createWoff2Buffer;
module.exports.createEotBuffer = createEotBuffer;
module.exports.glyphsMapping = glyphsMapping;
