#!/usr/bin/env node
// Stage 3 (real data): parse Figma's native "Export variables as JSON" output
// (one file per mode, in figma-native-export/) into base.json's exact shape,
// across all 3 themes. Writes converted-preview.json for inspection - does
// not touch the real base.json.
//
// Real export shape (see figma-native-export/*.tokens.json):
// - $value is an object { colorSpace, components, alpha, hex }, not an alias string
// - Alias info lives separately in $extensions["com.figma.aliasData"], with
//   targetVariableName like "Blue/500" or "Neutral/white" when the value
//   traces back to the Primitives collection
// - Group/kind names are Title Case ("Secondary danger", not "secondary-danger")

import { readFileSync, writeFileSync } from 'node:fs';

import {
  KIND_KEY,
  normalizeKind,
  STATE_SUFFIX,
  fontKey,
  primitiveAlias,
} from './token-name-mapping.mjs';

const MODE_FILES = {
  'light': 'figma-native-export/Light.tokens.json',
  'high-contrast': 'figma-native-export/HC Light.tokens.json',
  'dark': 'figma-native-export/Dark.tokens.json',
};

function tokenValue(token) {
  const alias = token.$extensions?.['com.figma.aliasData'];
  if (alias) {
    return primitiveAlias(alias.targetVariableName);
  }
  return token.$value.hex; // raw literal, not aliased to a Primitive
}

function extractButtonTokens(modeTree) {
  const result = {};

  for (const [kindRaw, states] of Object.entries(modeTree.Button.Background)) {
    const kind = KIND_KEY[normalizeKind(kindRaw)];
    if (!kind) {
      console.warn(`Skipping unmapped kind "${kindRaw}"`);
      continue;
    }
    for (const [state, token] of Object.entries(states)) {
      const suffix = STATE_SUFFIX[state];
      if (!suffix) {
        console.warn(`Skipping unmapped state "${state}"`);
        continue;
      }
      result[`background${kind}${suffix}`] = tokenValue(token);
    }
  }

  for (const [nameRaw, token] of Object.entries(modeTree.Button.Font)) {
    const match = nameRaw.match(/^on-([^/]+?)(-disabled)?$/);
    if (!match) {
      console.warn(`Skipping unmapped font token "${nameRaw}"`);
      continue;
    }
    const [, kindRaw, disabledSuffix] = match;
    const kind = KIND_KEY[normalizeKind(kindRaw)];
    if (!kind) {
      console.warn(`Skipping unmapped font kind "${kindRaw}"`);
      continue;
    }
    result[fontKey(kind, Boolean(disabledSuffix))] = tokenValue(token);
  }

  return result;
}

const allThemes = {};
for (const [themeName, filePath] of Object.entries(MODE_FILES)) {
  const modeTree = JSON.parse(
    readFileSync(new URL(filePath, import.meta.url), 'utf8'),
  );
  allThemes[themeName] = extractButtonTokens(modeTree);
  console.log(
    `Parsed ${Object.keys(allThemes[themeName]).length} Button tokens from "${themeName}".`,
  );
}

const output = {
  button: Object.fromEntries(
    Object.entries(allThemes).map(([theme, tokens]) => [
      theme,
      Object.fromEntries(
        Object.entries(tokens).map(([key, value]) => [key, { value }]),
      ),
    ]),
  ),
};

writeFileSync(
  new URL('./converted-preview.json', import.meta.url),
  `${JSON.stringify(output, null, 2)}\n`,
);

console.log(
  '\nWrote converted-preview.json - compare against src/button/base.json.',
);
