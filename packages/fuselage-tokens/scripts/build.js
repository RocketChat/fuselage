const { promises: fsPromises } = require('fs');
const { relative, join } = require('path');
const { inspect } = require('util');

const prettierOptions = require('@rocket.chat/prettier-config/fuselage');
const { ESLint } = require('eslint');
const prettier = require('prettier');

const rootDir = join(__dirname, '..');

const eslint = new ESLint({ fix: true });

const toCommonJS = async (data) => {
  const code = `'use strict';module.exports = ${JSON.stringify(data)};`;
  const results = await eslint.lintText(code);
  await ESLint.outputFixes(results);
  return results[0].output;
};

const toESModule = async (data) => {
  const code = `export default ${JSON.stringify(data)};`;
  const results = await eslint.lintText(code);
  await ESLint.outputFixes(results);
  return results[0].output;
};

const toScssVariables = async (data) => {
  const fromCamelToKebab = (string) =>
    string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();

  const toValue = (chunk) => {
    if (typeof chunk === 'boolean' || typeof chunk === 'number') {
      return chunk;
    }

    if (typeof chunk === 'string') {
      return /\s/.test(chunk) ? JSON.stringify(chunk) : chunk;
    }

    if (chunk === undefined || chunk === null) {
      return 'null';
    }

    if (Array.isArray(chunk)) {
      return `(${chunk.map(toValue).join(',')})`;
    }

    return `(${Object.entries(chunk)
      .map(([key, value]) => `${fromCamelToKebab(key)}:${toValue(value)}`)
      .join(',')})`;
  };

  return prettier.format(
    Object.entries(data)
      .map(
        ([varName, value]) =>
          `\$${fromCamelToKebab(varName)}:${toValue(value)};`
      )
      .join(''),
    {
      parser: 'scss',
      ...prettierOptions,
    }
  );
};

const readSource = async (sourcePath) => {
  console.log('read', inspect(relative(rootDir, sourcePath), { colors: true }));

  return JSON.parse(
    await fsPromises.readFile(sourcePath, { encoding: 'utf-8' })
  );
};

const writeSource = async (targetPath, data) => {
  console.log(
    'write',
    inspect(relative(rootDir, targetPath), { colors: true })
  );
  await fsPromises.writeFile(targetPath, data, { encoding: 'utf-8' });
};

const buildBreakpoints = async () => {
  const sourcePath = join(rootDir, 'breakpoints.json');
  const commonjsPath = join(rootDir, 'breakpoints.js');
  const esmodulePath = join(rootDir, 'breakpoints.mjs');
  const scssPath = join(rootDir, 'breakpoints.scss');

  const entries = await readSource(sourcePath);

  const indexedEntries = {};
  for (const entry of entries) {
    indexedEntries[entry.name] = entry;
  }

  const [commonjsSource, esmoduleSource, scssSource] = await Promise.all([
    toCommonJS(indexedEntries),
    toESModule(indexedEntries),
    toScssVariables({ breakpoints: indexedEntries }),
  ]);

  await Promise.all([
    writeSource(commonjsPath, commonjsSource),
    writeSource(esmodulePath, esmoduleSource),
    writeSource(scssPath, scssSource),
  ]);
};

const buildColors = async () => {
  const sourcePath = join(rootDir, 'colors.json');
  const commonjsPath = join(rootDir, 'colors.js');
  const esmodulePath = join(rootDir, 'colors.mjs');
  const scssPath = join(rootDir, 'colors.scss');

  const entries = await readSource(sourcePath);

  const [commonjsSource, esmoduleSource, scssSource] = await Promise.all([
    toCommonJS(entries),
    toESModule(entries),
    toScssVariables({ colors: entries }),
  ]);

  await Promise.all([
    writeSource(commonjsPath, commonjsSource),
    writeSource(esmodulePath, esmoduleSource),
    writeSource(scssPath, scssSource),
  ]);
};

const buildTypography = async () => {
  const sourcePath = join(rootDir, 'typography.json');
  const commonjsPath = join(rootDir, 'typography.js');
  const esmodulePath = join(rootDir, 'typography.mjs');
  const scssPath = join(rootDir, 'typography.scss');

  const entries = await readSource(sourcePath);

  const [commonjsSource, esmoduleSource, scssSource] = await Promise.all([
    toCommonJS(entries),
    toESModule(entries),
    toScssVariables(entries),
  ]);

  await Promise.all([
    writeSource(commonjsPath, commonjsSource),
    writeSource(esmodulePath, esmoduleSource),
    writeSource(scssPath, scssSource),
  ]);
};

process.on('unhandledRejection', (err) => {
  console.error('unhandledRejection:', err.message);
  console.error(err.stack);
  process.exit(1);
});

buildBreakpoints();
buildColors();
buildTypography();
