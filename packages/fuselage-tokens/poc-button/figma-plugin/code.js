// Plugin API version of fetch-figma-export.mjs's resolver logic - same
// alias-walking, same output shape (one tree per mode, matching
// figma-native-export/*.tokens.json). Runs inside Figma itself via the
// Plugin API, so it isn't subject to the Variables REST API's Enterprise
// plan gate - figma.variables.getLocalVariablesAsync() returns everything
// the REST /local endpoint would, for any plan.
/* global figma, __html__ */

figma.showUI(__html__, { width: 480, height: 480 });

function rgbaToHex({ r, g, b }) {
  const toHex = (c) =>
    Math.round(c * 255)
      .toString(16)
      .padStart(2, '0')
      .toUpperCase();
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

// Walks the alias chain for a variable/mode. Returns
// { hex, aliasName } where aliasName is the target variable's own `name`
// (e.g. "Blue/500") if the chain terminates in the Primitives collection,
// or aliasName: null if it's a raw literal. Same logic as
// fetch-figma-export.mjs's resolveVariable(), adapted to the Plugin API's
// Map-of-variables-by-id shape instead of the REST response's plain object.
//
// IMPORTANT: mode IDs are only meaningful within the collection that defines
// them. Themes' Light/HC Light/Dark mode IDs mean nothing to Primitives,
// which has its own single mode (shown as "Value" in the native export).
// So once alias resolution crosses into a different collection, we must
// switch to THAT collection's own default mode - reusing the caller's
// mode ID across collections is the bug this fixes.
function resolveVariable(
  variablesById,
  collectionsById,
  primitivesCollectionId,
  varId,
  modeId,
  seen,
) {
  seen = seen || new Set();
  if (seen.has(varId)) {
    throw new Error(`Alias cycle detected at variable ${varId}`);
  }
  seen.add(varId);

  const variable = variablesById.get(varId);
  if (!variable) {
    throw new Error(`Unknown variable id ${varId}`);
  }

  const hasOwnModeValue =
    variable.valuesByMode && modeId in variable.valuesByMode;
  const effectiveModeId = hasOwnModeValue
    ? modeId
    : collectionsById.get(variable.variableCollectionId).defaultModeId;

  if (!variable.valuesByMode || !(effectiveModeId in variable.valuesByMode)) {
    throw new Error(
      `Variable "${variable.name}" has no value for mode ${
        effectiveModeId
      } (valuesByMode keys: ${
        variable.valuesByMode
          ? Object.keys(variable.valuesByMode).join(', ')
          : 'none'
      })`,
    );
  }

  const raw = variable.valuesByMode[effectiveModeId];

  if (raw && raw.type === 'VARIABLE_ALIAS') {
    const resolved = resolveVariable(
      variablesById,
      collectionsById,
      primitivesCollectionId,
      raw.id,
      modeId,
      seen,
    );
    if (variable.variableCollectionId === primitivesCollectionId) {
      return { hex: resolved.hex, aliasName: variable.name };
    }
    return resolved;
  }

  const hex = rgbaToHex(raw);
  if (variable.variableCollectionId === primitivesCollectionId) {
    return { hex, aliasName: variable.name };
  }
  return { hex, aliasName: null };
}

function toToken(resolved) {
  const token = { $type: 'color', $value: { hex: resolved.hex } };
  if (resolved.aliasName) {
    token.$extensions = {
      'com.figma.aliasData': { targetVariableName: resolved.aliasName },
    };
  }
  return token;
}

async function run() {
  const collections = await figma.variables.getLocalVariableCollectionsAsync();
  const themes = collections.find((c) => c.name === 'Themes');
  const primitives = collections.find((c) => c.name === 'Primitives');

  if (!themes || !primitives) {
    figma.ui.postMessage({
      type: 'error',
      message: `Could not find "Themes"/"Primitives" collections. Found: ${collections
        .map((c) => c.name)
        .join(', ')}`,
    });
    return;
  }

  const allVariables = await figma.variables.getLocalVariablesAsync();
  const variablesById = new Map(allVariables.map((v) => [v.id, v]));
  const collectionsById = new Map(collections.map((c) => [c.id, c]));

  const filesByMode = {};

  for (const mode of themes.modes) {
    const modeTree = { Button: { Background: {}, Font: {} } };
    let matchedCount = 0;

    for (const variable of allVariables) {
      if (variable.variableCollectionId !== themes.id) continue;
      if (!variable.name.startsWith('Button/')) continue;

      const resolved = resolveVariable(
        variablesById,
        collectionsById,
        primitives.id,
        variable.id,
        mode.modeId,
      );
      const token = toToken(resolved);

      const bgMatch = variable.name.match(
        /^Button\/Background\/([^/]+)\/(.+)$/,
      );
      if (bgMatch) {
        const kindRaw = bgMatch[1];
        const state = bgMatch[2];
        modeTree.Button.Background[kindRaw] =
          modeTree.Button.Background[kindRaw] || {};
        modeTree.Button.Background[kindRaw][state] = token;
        matchedCount++;
        continue;
      }

      const fontMatch = variable.name.match(/^Button\/Font\/(on-.+)$/);
      if (fontMatch) {
        modeTree.Button.Font[fontMatch[1]] = token;
        matchedCount++;
      }
    }

    modeTree.$extensions = { 'com.figma.modeName': mode.name };
    filesByMode[mode.name] = { tree: modeTree, matchedCount };
  }

  figma.ui.postMessage({ type: 'result', filesByMode });
}

run().catch(function (err) {
  figma.ui.postMessage({ type: 'error', message: err.message });
});
