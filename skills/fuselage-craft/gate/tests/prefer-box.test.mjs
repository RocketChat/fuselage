/**
 * Tests for rules/prefer-box.mjs
 */

import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const gateDir = resolve(__dirname, '..');

const req = createRequire(resolve(gateDir, 'package.json'));
const { RuleTester } = req('eslint');
const tseslint = req('typescript-eslint');

import rule from '../rules/prefer-box.mjs';

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

tester.run('prefer-box', rule, {
  valid: [
    // Box with semantic props — no inline style
    {
      code: `const C = () => <Box p="x16" color="font-default" />;`,
      filename: 'comp.tsx',
    },
    // Custom component (uppercase) with style — not a raw DOM element
    {
      code: `const C = () => <MyComponent style={{ padding: 'var(--x)' }} />;`,
      filename: 'comp.tsx',
    },
    // Empty style object on div — should not warn (no properties)
    {
      code: `const C = () => <div style={{}} />;`,
      filename: 'comp.tsx',
    },
    // Raw div without any style prop
    {
      code: `const C = () => <div className="foo" />;`,
      filename: 'comp.tsx',
    },
  ],

  invalid: [
    // div with inline style object
    {
      code: `const C = () => <div style={{ display: 'flex' }} />;`,
      filename: 'comp.tsx',
      errors: [{ messageId: 'preferBox', data: { tag: 'div' } }],
    },
    // span with inline style object
    {
      code: `const C = () => <span style={{ fontWeight: 'bold' }} />;`,
      filename: 'comp.tsx',
      errors: [{ messageId: 'preferBox', data: { tag: 'span' } }],
    },
    // section with inline style object
    {
      code: `const C = () => <section style={{ margin: 'auto' }} />;`,
      filename: 'comp.tsx',
      errors: [{ messageId: 'preferBox', data: { tag: 'section' } }],
    },
  ],
});

console.log('prefer-box: all tests passed');
