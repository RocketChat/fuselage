import { extname } from 'path';
import { ESLint } from 'eslint';
import stylelint from 'stylelint';
import prettier from 'prettier';
import { encodeJson } from './json.mjs';

export const runEslint = (path) => async (source) => {
  const eslint = new ESLint({ fix: true, extensions: [extname(path)] });
  const results = await eslint.lintText(source);
  const [result] = results;

  if (result.fatalErrorCount > 0) {
    throw new Error(result.messages.map(({ message }) => message).join('\n'));
  }

  await ESLint.outputFixes(results);
  return result.output;
};

export const runStylelint = (path) => async (source) => {
  const results = await stylelint.lint({
    code: source,
    codeFilename: path,
    fix: true,
  });

  return results.output;
};

export const runPrettier = (path) => async (source) => {
  const config = await prettier.resolveConfig(process.cwd());

  return await prettier.format(source, {
    ...config,
    parser:
      (extname(path) === '.json' && 'json') ||
      (extname(path) === '.json5' && 'json5') ||
      undefined,
  });
};

export const toJson = async (data) => {
  const code = encodeJson(data);
  return await runPrettier('index.json')(code);
};

export const toCommonJsModule = async (data) => {
  const code = `
    'use strict';
    module.exports = ${encodeJson(data)};
  `;
  return await runEslint('index.cjs')(code);
};

export const toEsmModule = async (data) => {
  const code = `
    export default ${encodeJson(data)};
  `;
  return await runEslint('index.mjs')(code);
};

export const toScssIdentifier = (string) =>
  string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();

export const toScssValue = (chunk) => {
  if (typeof chunk === 'boolean' || typeof chunk === 'number') {
    return chunk;
  }

  if (typeof chunk === 'string') {
    return /\s/.test(chunk) ? encodeJson(chunk) : chunk;
  }

  if (chunk === undefined || chunk === null) {
    return 'null';
  }

  if (Array.isArray(chunk)) {
    return `(${chunk.map(toScssValue).join(',')})`;
  }

  return `(${Object.entries(chunk)
    .map(([key, value]) => `${toScssIdentifier(key)}:${toScssValue(value)}`)
    .join(',')})`;
};

export const toScssVariables = async (data) => {
  const code = Object.entries(data)
    .map(
      ([varName, value]) =>
        `\$${toScssIdentifier(varName)}:${toScssValue(value)};`
    )
    .join('');

  return await runStylelint('index.scss')(code);
};
