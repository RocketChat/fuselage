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
    toJson(Object.values(entries)).then(writeSource('./breakpoints.json')),
    toCommonJsModule(entries).then(writeSource('./breakpoints.js')),
    toEsmModule(entries).then(writeSource('./breakpoints.mjs')),
    toScssVariables({ breakpoints: entries }).then(
      writeSource('./breakpoints.scss')
    ),
  ]);
};

const buildColors = async () => {
  const entries = await readJson5('./src/colors.jsonc');

  await Promise.all([
    toJson(entries).then(writeSource('./colors.json')),
    toCommonJsModule(entries).then(writeSource('./colors.js')),
    toEsmModule(entries).then(writeSource('./colors.mjs')),
    toScssVariables({ colors: entries }).then(writeSource('./colors.scss')),
  ]);
};

const buildTypography = async () => {
  const entries = await readJson5('./src/typography.jsonc');

  await Promise.all([
    toJson(entries).then(writeSource('./typography.json')),
    toCommonJsModule(entries).then(writeSource('./typography.js')),
    toEsmModule(entries).then(writeSource('./typography.mjs')),
    toScssVariables(entries).then(writeSource('./typography.scss')),
  ]);
};

await Promise.all([buildBreakpoints(), buildColors(), buildTypography()]);
