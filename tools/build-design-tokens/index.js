#!/usr/bin/env node

import { readJson5, writeSource } from 'tools-utils/files';
import {
  toJson,
  toCommonJsModule,
  toEsmModule,
  toScssVariables,
} from 'tools-utils/source';

const buildTypography = async () => {
  const entries = await readJson5('./src/typography.jsonc');

  await Promise.all([
    toJson(entries).then(writeSource('./typography.json')),
    toCommonJsModule(entries).then(writeSource('./typography.js')),
    toEsmModule(entries).then(writeSource('./typography.mjs')),
    toScssVariables(entries).then(writeSource('./typography.scss')),
  ]);
};

buildTypography();
