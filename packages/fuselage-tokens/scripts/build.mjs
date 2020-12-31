import { promises as fsPromises } from 'fs';
import { basename, join } from 'path';
import { fileURLToPath } from 'url';
import { inspect } from 'util';
import prettier from 'prettier';

const rootDir = join(fileURLToPath(import.meta.url), '../..');

let prettierOptions;
const getPrettierOptions = async () => {
  if (!prettierOptions) {
    const prettierRCPath = join(rootDir, '.prettierrc');
    prettierOptions = JSON.parse(
      await fsPromises.readFile(prettierRCPath, { encoding: 'utf-8' })
    );
  }

  return prettierOptions;
};

const toCommonJS = async (data) => {
  return prettier.format(
    `'use strict';module.exports = ${JSON.stringify(data)};`,
    {
      parser: 'babel',
      ...(await getPrettierOptions()),
    }
  );
};

const toESModule = async (data) => {
  return prettier.format(`export default ${JSON.stringify(data)};`, {
    parser: 'babel',
    ...(await getPrettierOptions()),
  });
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
      .map(([key, value]) => {
        return fromCamelToKebab(key) + ':' + toValue(value);
      })
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
      ...(await getPrettierOptions()),
    }
  );
};

const readSource = async (sourcePath) => {
  console.log('📂', inspect(basename(sourcePath), { colors: true }));

  return JSON.parse(
    await fsPromises.readFile(sourcePath, { encoding: 'utf-8' })
  );
};

const writeSource = async (targetPath, data) => {
  console.log('💾', inspect(basename(targetPath), { colors: true }));
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
