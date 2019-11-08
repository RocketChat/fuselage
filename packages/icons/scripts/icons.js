const path = require('path');

const glob = require('glob');
const {
  Ps: punctuationStartCharacters,
  Pe: punctuationEndCharacters,
  Pi: initialPunctuationCharacters,
  Pf: finalPunctuationCharacters,
} = require('unicode/category');

const startCharacters = [
  ...Object.values(punctuationStartCharacters).filter(({ mirrored }) => mirrored === 'Y').map(({ symbol }) => symbol),
  ...Object.values(initialPunctuationCharacters).filter(({ mirrored }) => mirrored === 'Y').map(({ symbol }) => symbol),
];

const endCharacters = [
  ...Object.values(punctuationEndCharacters).filter(({ mirrored }) => mirrored === 'Y').map(({ symbol }) => symbol),
  ...Object.values(finalPunctuationCharacters).filter(({ mirrored }) => mirrored === 'Y').map(({ symbol }) => symbol),
];

const mirroredCharacterPairs = startCharacters.map((start, i) => ({ start, end: endCharacters[i] }));

const getDirectional = (srcPath) => glob.sync(`${ srcPath }/directional/*.svg`)
  .map((match) => ({
    name: path.basename(match, '.svg'),
    path: match,
  }));

const getNeutral = (srcPath) => glob.sync(`${ srcPath }/neutral/*.svg`)
  .map((match) => ({
    name: path.basename(match, '.svg'),
    path: match,
  }));

const getOther = (srcPath) => glob.sync(`${ srcPath }/other/*.svg`)
  .map((match) => ({
    name: path.basename(match, '.svg'),
    path: match,
  }));

const getFontIcons = (srcPath) => [
  ...getDirectional(srcPath).map((icon, i) => ({ ...icon, unicode: [mirroredCharacterPairs[i].start] })),
  ...getDirectional(srcPath).map((icon, i) => ({ ...icon, unicode: [mirroredCharacterPairs[i].end], mirror: true })),
  ...getNeutral(srcPath).map((icon, i) => ({ ...icon, unicode: [String.fromCodePoint(0xe000 + i)] })),
].sort(({ name: a }, { name: b }) => a.localeCompare(b));

const getSvgIcons = (srcPath) => [
  ...getDirectional(srcPath),
  ...getNeutral(srcPath),
  ...getOther(srcPath),
].sort(({ name: a }, { name: b }) => a.localeCompare(b));

module.exports.getFontIcons = getFontIcons;
module.exports.getSvgIcons = getSvgIcons;
