import { ESLint } from 'eslint';
import prettier from 'prettier';

let eslint;

const getEslint = () => {
  if (!eslint) {
    eslint = new ESLint({ fix: true });
  }

  return eslint;
};

export const formatJavaScript = async (code) => {
  const eslint = getEslint();
  const results = await eslint.lintText(code);
  await ESLint.outputFixes(results);
  return results[0].output;
};

export const toJavaScriptValue = (data) => {
  return JSON.stringify(data, null, 2);
};

export const toScssIdentifier = (string) =>
  string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();

export const toScssValue = (chunk) => {
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
    return `(${chunk.map(toScssValue).join(',')})`;
  }

  return `(${Object.entries(chunk)
    .map(([key, value]) => `${toScssIdentifier(key)}:${toScssValue(value)}`)
    .join(',')})`;
};

let prettierConfig;

const getPrettierConfig = async () => {
  if (!prettierConfig) {
    prettierConfig = await prettier.resolveConfig();
  }

  return prettierConfig;
};

export const formatScss = async (code) => {
  return prettier.format(code, {
    parser: 'scss',
    ...(await getPrettierConfig()),
  });
};
