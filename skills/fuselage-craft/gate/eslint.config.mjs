/**
 * ESLint 9 flat config for the fuselage-craft gate.
 *
 * Intended to be run standalone via --config against a consumer repo's source:
 *   npx eslint --config path/to/gate/eslint.config.mjs src/
 *
 * Parser: typescript-eslint's parser is resolved from the host repo's installed
 * packages (consumer's node_modules). Falls back gracefully if not present.
 *
 * Plugin: the local fuselage-craft-gate plugin (rules/index.mjs).
 */

import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import fuselageCraftGate from './rules/index.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Resolve typescript-eslint's parser from:
 *  1. The consumer's CWD node_modules (runtime consumer)
 *  2. This gate's own node_modules (when gate has its own install)
 *  3. Dynamic import fallback for ESM-only installs
 *
 * Returns the parser object or undefined (lint runs without TS parsing).
 */
async function resolveParser() {
  const searchPaths = [process.cwd(), __dirname];
  for (const base of searchPaths) {
    // Try a package.json anchor in that directory; fall back to a synthetic path
    const anchors = [resolve(base, 'package.json'), resolve(base, '_anchor.js')];
    for (const anchor of anchors) {
      try {
        const req = createRequire(anchor);
        // typescript-eslint re-exports the parser
        const te = req('typescript-eslint');
        if (te && te.parser) return te.parser;
      } catch {
        // not found at this anchor
      }
      try {
        const req = createRequire(anchor);
        return req('@typescript-eslint/parser');
      } catch {
        // not found
      }
    }
  }
  // Final fallback: dynamic import (works for ESM-only packages in scope)
  try {
    const tseslint = await import('typescript-eslint');
    const mod = tseslint.default || tseslint;
    if (mod && mod.parser) return mod.parser;
  } catch {
    // no parser found — lint will run without TypeScript parsing
  }
  return undefined;
}

const tsParser = await resolveParser();

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    // Ignore common build artifacts
    ignores: [
      '**/dist/**',
      '**/node_modules/**',
      '**/.yarn/**',
      '**/*.d.ts',
      '**/storybook-static/**',
    ],
  },
  {
    // Apply to all JS/TS/JSX/TSX files
    files: ['**/*.{ts,tsx,js,jsx,mjs}'],
    plugins: {
      'fuselage-craft-gate': fuselageCraftGate,
    },
    ...(tsParser
      ? {
          languageOptions: {
            parser: tsParser,
            parserOptions: {
              ecmaVersion: 'latest',
              sourceType: 'module',
              ecmaFeatures: { jsx: true },
              // Skip full type-aware linting for speed — no project reference needed
              project: false,
            },
          },
        }
      : {
          languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            parserOptions: {
              ecmaFeatures: { jsx: true },
            },
          },
        }),
    rules: {
      // Errors — literal value bans
      'fuselage-craft-gate/no-raw-color': 'error',
      'fuselage-craft-gate/no-literal-dimension': 'error',
      'fuselage-craft-gate/no-literal-shadow': 'error',
      'fuselage-craft-gate/require-field-wrapper': 'error',
      // Warning — conservative suggestion
      'fuselage-craft-gate/prefer-box': 'warn',
    },
  },
];
