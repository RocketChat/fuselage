/**
 * Tests for rules/no-literal-shadow.mjs
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

import rule from '../rules/no-literal-shadow.mjs';

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

tester.run('no-literal-shadow', rule, {
  valid: [
    // 'none' is allowed
    {
      code: `const C = () => <div style={{ boxShadow: 'none' }} />;`,
      filename: 'comp.tsx',
    },
    // No shadow prop — no issue
    {
      code: `const C = () => <div style={{ color: 'var(--rcx-color-font-default)' }} />;`,
      filename: 'comp.tsx',
    },
    // 'unset' is allowed
    {
      code: `const C = () => <div style={{ boxShadow: 'unset' }} />;`,
      filename: 'comp.tsx',
    },
  ],

  invalid: [
    // Literal shadow value
    {
      code: `const C = () => <div style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }} />;`,
      filename: 'comp.tsx',
      errors: [{ messageId: 'noLiteralShadow' }],
    },
    // Literal shadow with hex color
    {
      code: `const C = () => <div style={{ boxShadow: '0 0 4px #000' }} />;`,
      filename: 'comp.tsx',
      errors: [{ messageId: 'noLiteralShadow' }],
    },
    // box-shadow in styled tagged template
    {
      code: `const S = styled.div\`box-shadow: 0 1px 3px rgba(0,0,0,0.3);\`;`,
      filename: 'comp.tsx',
      errors: [{ messageId: 'noLiteralShadow' }],
    },
  ],
});

console.log('no-literal-shadow: all tests passed');
