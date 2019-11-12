const path = require('path');
const { promisify } = require('util');

const glob = promisify(require('glob'));
const {
  Ps: punctuationStartCharacters,
  Pe: punctuationEndCharacters,
  Pi: initialPunctuationCharacters,
  Pf: finalPunctuationCharacters,
} = require('unicode/category');

const { logStep } = require('./log');

const startCharacters = [
  ...Object.values(punctuationStartCharacters).filter(({ mirrored }) => mirrored === 'Y').map(({ symbol }) => symbol),
  ...Object.values(initialPunctuationCharacters).filter(({ mirrored }) => mirrored === 'Y').map(({ symbol }) => symbol),
];

const endCharacters = [
  ...Object.values(punctuationEndCharacters).filter(({ mirrored }) => mirrored === 'Y').map(({ symbol }) => symbol),
  ...Object.values(finalPunctuationCharacters).filter(({ mirrored }) => mirrored === 'Y').map(({ symbol }) => symbol),
];

const getDirectionalIcons = async (srcPath) => {
  const step = logStep('Read directional icons');

  const paths = await glob(path.join(srcPath, 'directional/*.svg'));

  step.resolve();

  const descriptors = paths
    .map((match, i) => ({
      name: path.basename(match, '.svg'),
      path: match,
      startCharacter: startCharacters[i],
      endCharacter: endCharacters[i],
    }));

  step.resolve();

  return descriptors;
};

const getNeutralIcons = async (srcPath) => {
  const step = logStep('Read neutral icons');

  const paths = await glob(path.join(srcPath, 'neutral/*.svg'));

  step.resolve();

  const descriptors = paths
    .map((match, i) => ({
      name: path.basename(match, '.svg'),
      path: match,
      startCharacter: String.fromCodePoint(0xe000 + i),
    }));

  step.resolve();

  return descriptors;
};

const getOtherIcons = async (srcPath) => {
  const step = logStep('Read other icons');

  const paths = await glob(path.join(srcPath, 'other/*.svg'));

  step.resolve();

  const descriptors = paths
    .map((match) => ({
      name: path.basename(match, '.svg'),
      path: match,
    }));

  step.resolve();

  return descriptors;
};

const getIcons = async (srcPath) =>
  [].concat(...await Promise.all([
    getDirectionalIcons(srcPath),
    getNeutralIcons(srcPath),
    getOtherIcons(srcPath),
  ]))
    .sort(({ name: a }, { name: b }) => a.localeCompare(b));

module.exports.getIcons = getIcons;
