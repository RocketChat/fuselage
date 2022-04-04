#!/usr/bin/env node

import { readJson5, writeSource } from 'tools-utils/files';
import {
  toJson,
  toCommonJsModule,
  toEsmModule,
  toScssVariables,
} from 'tools-utils/source';

const buildBreakpoints = async () => {
  const entries = await readJson5('./src/breakpoints.jsonc');

  await Promise.all([
    toJson(Object.values(entries)).then(writeSource('./dist/breakpoints.json')),
    toCommonJsModule(entries).then(writeSource('./dist/breakpoints.js')),
    toEsmModule(entries).then(writeSource('./dist/breakpoints.mjs')),
    toScssVariables({ breakpoints: entries }).then(
      writeSource('./dist/breakpoints.scss')
    ),
  ]);
};

const buildColors = async () => {
  const entries = await readJson5('./src/colors.json');

  await Promise.all([
    toJson(entries).then(writeSource('./dist/colors.json')),
    toCommonJsModule(entries).then(writeSource('./dist/colors.js')),
    toEsmModule(entries).then(writeSource('./dist/colors.mjs')),
    toScssVariables({ colors: entries }).then(
      writeSource('./dist/colors.scss')
    ),
  ]);
};

const buildTypography = async () => {
  const entries = await readJson5('./src/typography.jsonc');

  await Promise.all([
    toJson(entries).then(writeSource('./dist/typography.json')),
    toCommonJsModule(entries).then(writeSource('./dist/typography.js')),
    toEsmModule(entries).then(writeSource('./dist/typography.mjs')),
    toScssVariables(entries).then(writeSource('./dist/typography.scss')),
  ]);
};

await Promise.all([buildBreakpoints(), buildColors(), buildTypography()]);
