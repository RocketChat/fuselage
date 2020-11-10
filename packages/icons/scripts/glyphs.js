const {
  Ps: punctuationStartCharacters,
  Pe: punctuationEndCharacters,
  Pi: initialPunctuationCharacters,
  Pf: finalPunctuationCharacters,
} = require('unicode/category');

const glyphsMapping = require('../glyphsMapping.json');

const startCharacters = [
  ...Object.values(punctuationStartCharacters)
    .filter(({ mirrored }) => mirrored === 'Y')
    .map(({ symbol }) => symbol),
  ...Object.values(initialPunctuationCharacters)
    .filter(({ mirrored }) => mirrored === 'Y')
    .map(({ symbol }) => symbol),
];

const endCharacters = [
  ...Object.values(punctuationEndCharacters)
    .filter(({ mirrored }) => mirrored === 'Y')
    .map(({ symbol }) => symbol),
  ...Object.values(finalPunctuationCharacters)
    .filter(({ mirrored }) => mirrored === 'Y')
    .map(({ symbol }) => symbol),
];

let directionalCounter =
  Math.max(
    ...Object.values(glyphsMapping)
      .map(({ start }) => startCharacters.indexOf(start))
      .filter((index) => index > -1)
  ) + 1;
let neutralCounter =
  Math.max(
    ...Object.values(glyphsMapping)
      .map(({ start }) => start.codePointAt(0))
      .filter((codePoint) => codePoint >= 0xe000)
  ) -
  0xe000 +
  1;

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

module.exports.nextCharactersFor = nextCharactersFor;
module.exports.glyphsMapping = glyphsMapping;
