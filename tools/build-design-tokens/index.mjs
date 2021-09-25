#!/usr/bin/env node

import { readFile, writeFile } from 'fs/promises';
import { relative, join } from 'path';
import {
  formatJavaScript,
  toScssIdentifier,
  toScssValue,
  toJavaScriptValue,
  formatScss,
} from './format.mjs';

const toCommonJS = async (data) => {
  const code = `
    'use strict';
    module.exports = ${toJavaScriptValue(data)};
  `;
  return await formatJavaScript(code);
};

const toESModule = async (data) => {
  const code = `
    export default ${toJavaScriptValue(data)};
  `;
  return await formatJavaScript(code);
};

const toScssVariables = async (data) => {
  const code = Object.entries(data)
    .map(
      ([varName, value]) =>
        `\$${toScssIdentifier(varName)}:${toScssValue(value)};`
    )
    .join('');

  return await formatScss(code);
};

const read = async (sourcePath) => {
  return JSON.parse(await readFile(sourcePath, { encoding: 'utf-8' }));
};

const write = (targetPath) => async (data) => {
  await writeFile(targetPath, data, { encoding: 'utf-8' });
};

const buildBreakpoints = async () => {
  const entries = await read('./breakpoints.json');

  await Promise.all([
    toCommonJS(entries).then(write('./breakpoints.js')),
    toESModule(entries).then(write('./breakpoints.mjs')),
    toScssVariables({ breakpoints: entries }).then(write('./breakpoints.scss')),
  ]);
};

const buildColors = async () => {
  const entries = await read('./colors.json');

  await Promise.all([
    toCommonJS(entries).then(write('./colors.js')),
    toESModule(entries).then(write('./colors.mjs')),
    toScssVariables({ colors: entries }).then(write('./colors.scss')),
  ]);
};

const buildTypography = async () => {
  const entries = await read('./typography.json');

  await Promise.all([
    toCommonJS(entries).then(write('./typography.js')),
    toESModule(entries).then(write('./typography.mjs')),
    toScssVariables(entries).then(write('./typography.scss')),
  ]);
};

await Promise.all([buildBreakpoints(), buildColors(), buildTypography()]);
