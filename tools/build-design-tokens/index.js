#!/usr/bin/env node

import { readJson5, writeSource } from 'tools-utils/files';
import { toJson, toScssVariables } from 'tools-utils/source';

const buildBreakpoints = async () => {
  const entries = await readJson5('./src/breakpoints.jsonc');

  await Promise.all([
    toJson(Object.values(entries)).then(writeSource('./breakpoints.json')),
    toScssVariables({ breakpoints: entries }).then(
      writeSource('./breakpoints.scss'),
    ),
  ]);
};

const buildColors = async () => {
  const entries = await readJson5('./src/colors.jsonc');

  await Promise.all([
    toJson(entries).then(writeSource('./colors.json')),
    toScssVariables({ colors: entries }).then(writeSource('./colors.scss')),
  ]);
};

const buildTypography = async () => {
  const entries = await readJson5('./src/typography.jsonc');

  await Promise.all([
    toJson(entries).then(writeSource('./typography.json')),
    toScssVariables(entries).then(writeSource('./typography.scss')),
  ]);
};

buildBreakpoints();
buildColors();
buildTypography();
