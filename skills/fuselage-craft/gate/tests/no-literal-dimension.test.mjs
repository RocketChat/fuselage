/**
 * Tests for rules/no-literal-dimension.mjs
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

import rule from '../rules/no-literal-dimension.mjs';

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

tester.run('no-literal-dimension', rule, {
  valid: [
    // 0 is allowed
    {
      code: `const C = () => <div style={{ padding: '0' }} />;`,
      filename: 'comp.tsx',
    },
    // auto is allowed
    {
      code: `const C = () => <div style={{ margin: 'auto' }} />;`,
      filename: 'comp.tsx',
    },
    // 100% is allowed
    {
      code: `const C = () => <div style={{ width: '100%' }} />;`,
      filename: 'comp.tsx',
    },
    // CSS var() is allowed
    {
      code: `const C = () => <div style={{ padding: 'var(--rcx-spacing-x16)' }} />;`,
      filename: 'comp.tsx',
    },
    // px outside style={{}} — not flagged (false positive guard)
    {
      code: `const label = '16px font';`,
      filename: 'comp.tsx',
    },
  ],

  invalid: [
    // Literal px in padding inside style={{}}
    {
      code: `const C = () => <div style={{ padding: '16px' }} />;`,
      filename: 'comp.tsx',
      errors: [{ messageId: 'noLiteralDimension' }],
    },
    // Literal rem in fontSize inside style={{}}
    {
      code: `const C = () => <div style={{ fontSize: '1.5rem' }} />;`,
      filename: 'comp.tsx',
      errors: [{ messageId: 'noLiteralDimension' }],
    },
    // Literal px in borderRadius inside style={{}}
    {
      code: `const C = () => <div style={{ borderRadius: '4px' }} />;`,
      filename: 'comp.tsx',
      errors: [{ messageId: 'noLiteralDimension' }],
    },
    // Literal px in css tagged template
    {
      code: `const s = css\`padding: 16px;\`;`,
      filename: 'comp.tsx',
      errors: [{ messageId: 'noLiteralDimension' }],
    },
  ],
});

console.log('no-literal-dimension: all tests passed');
