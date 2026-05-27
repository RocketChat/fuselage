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

/**
 * No-op catch-all plugin for foreign rule namespaces.
 *
 * Consumer code often has inline-disable directives for plugins that are NOT
 * loaded by this gate (e.g. react, @typescript-eslint, import, jsx-a11y).
 * In ESLint 9, an unknown rule namespace in a disable directive is a FATAL
 * error (not just a warning), even with reportUnusedDisableDirectives:'off'.
 * Registering the common namespaces as no-op plugins (via a Proxy that returns
 * an empty rule stub for every lookup) makes the disable directives resolve
 * without errors, while the gate still enforces ONLY its own fuselage-craft-gate
 * rules. The linterOptions reportUnusedDisableDirectives:'off' suppresses the
 * residual "unused disable directive" warning for directives that match no
 * active rule in this config.
 */
const noopPlugin = {
  rules: new Proxy(
    {},
    { get: () => ({ meta: {}, create: () => ({}) }) },
  ),
};

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
      // Foreign namespaces registered as no-ops so their inline-disable
      // directives in consumer code don't cause "rule not found" fatal errors.
      'react': noopPlugin,
      'react-hooks': noopPlugin,
      '@typescript-eslint': noopPlugin,
      'import': noopPlugin,
      'jsx-a11y': noopPlugin,
      'unicorn': noopPlugin,
      'simple-import-sort': noopPlugin,
      'prettier': noopPlugin,
      'no-relative-import-paths': noopPlugin,
    },
    linterOptions: {
      // Suppress "unused disable directive" warnings that arise when a directive
      // references a no-op rule (i.e. a foreign namespace registered above).
      reportUnusedDisableDirectives: 'off',
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
      // Errors — objective drift the type gate cannot see and that is unambiguously wrong.
      'fuselage-craft-gate/no-raw-color': 'error',
      'fuselage-craft-gate/no-literal-dimension': 'error',
      'fuselage-craft-gate/no-literal-shadow': 'error',
      // Registered but no-op here — the live `palette` option is injected only by
      // run-gate.mjs via resolveCategory('semantic'). Under standalone `npx eslint
      // --config` this rule has no palette and deliberately no-ops (never false-positives).
      // The authoritative check is always via run-gate.mjs.
      'fuselage-craft-gate/valid-color-token': 'error',
      // Warnings — accessibility/idiom recommendations, not hard conformance failures.
      // A missing Field wrapper is advisory (toolbar/filter inputs legitimately skip it);
      // it informs without blocking the gate. Reserve errors for objective drift above.
      'fuselage-craft-gate/require-field-wrapper': 'warn',
      'fuselage-craft-gate/prefer-box': 'warn',
    },
  },
];
