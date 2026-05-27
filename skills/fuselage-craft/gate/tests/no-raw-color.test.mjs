/**
 * Tests for rules/no-raw-color.mjs
 *
 * Run via: node tests/run-tests.mjs (from the gate/ directory)
 */

import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const gateDir = resolve(__dirname, '..');

// Resolve from gate's own node_modules
const req = createRequire(resolve(gateDir, 'package.json'));
const { RuleTester } = req('eslint');
const tseslint = req('typescript-eslint');

import rule from '../rules/no-raw-color.mjs';

const tester = new RuleTester({
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: { jsx: true },
      project: false,
    },
  },
});

tester.run('no-raw-color', rule, {
  valid: [
    // Box with semantic token name — no literal color
    {
      code: `const C = () => <Box color="font-default" bg="surface-tint" />;`,
      filename: 'comp.tsx',
    },
    // style with a CSS variable — allowed
    {
      code: `const C = () => <div style={{ color: 'var(--rcx-color-font-default)' }} />;`,
      filename: 'comp.tsx',
    },
    // Non-color style property — not a color attribute name, not in style context
    {
      code: `const C = () => <Box fontScale="h3" />;`,
      filename: 'comp.tsx',
    },
    // String that looks like a hex but is in a non-color prop name
    {
      code: `const C = () => <input id="#something" />;`,
      filename: 'comp.tsx',
    },
  ],

  invalid: [
    // Hex color in style object
    {
      code: `const C = () => <div style={{ color: '#156FF5' }} />;`,
      filename: 'comp.tsx',
      errors: [{ messageId: 'noRawColor' }],
    },
    // rgba in style object
    {
      code: `const C = () => <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} />;`,
      filename: 'comp.tsx',
      errors: [{ messageId: 'noRawColor' }],
    },
    // Hex in css tagged template
    {
      code: `const styles = css\`color: #fff;\`;`,
      filename: 'comp.tsx',
      errors: [{ messageId: 'noRawColor' }],
    },
    // hsl in styled tagged template
    {
      code: `const Comp = styled.div\`background: hsl(200, 50%, 50%);\`;`,
      filename: 'comp.tsx',
      errors: [{ messageId: 'noRawColor' }],
    },
  ],
});

console.log('no-raw-color: all tests passed');
