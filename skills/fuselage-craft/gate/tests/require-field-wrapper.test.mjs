/**
 * Tests for rules/require-field-wrapper.mjs
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

import rule from '../rules/require-field-wrapper.mjs';

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

tester.run('require-field-wrapper', rule, {
  valid: [
    // Raw input inside <Field>
    {
      code: `const C = () => <Field><input type="text" /></Field>;`,
      filename: 'comp.tsx',
    },
    // Fuselage TextInput inside <Field> — valid when controls option includes it
    {
      code: `const C = () => <Field><TextInput /></Field>;`,
      filename: 'comp.tsx',
      options: [{ controls: ['TextInput'] }],
    },
    // Select inside nested <Field> ancestor — valid when controls option includes it
    {
      code: `const C = () => <Field><Field.Row><Select options={[]} /></Field.Row></Field>;`,
      filename: 'comp.tsx',
      options: [{ controls: ['Select'] }],
    },
    // Non-control element — not checked regardless of options
    {
      code: `const C = () => <Box><Button>Submit</Button></Box>;`,
      filename: 'comp.tsx',
    },
    // Fuselage TextInput outside Field — NOT flagged when not in controls list (default)
    {
      code: `const C = () => <div><TextInput /></div>;`,
      filename: 'comp.tsx',
    },
  ],

  invalid: [
    // Raw input with no Field ancestor — always flagged (raw HTML in default)
    {
      code: `const C = () => <div><input type="text" /></div>;`,
      filename: 'comp.tsx',
      errors: [
        { messageId: 'requireFieldWrapper', data: { name: 'input', field: 'Field' } },
      ],
    },
    // Fuselage TextInput with no Field ancestor — flagged when controls option includes it
    {
      code: `const C = () => <div><TextInput /></div>;`,
      filename: 'comp.tsx',
      options: [{ controls: ['input', 'select', 'textarea', 'TextInput'] }],
      errors: [
        { messageId: 'requireFieldWrapper', data: { name: 'TextInput', field: 'Field' } },
      ],
    },
    // Fuselage Select with no Field ancestor — flagged when controls option includes it
    {
      code: `const C = () => <form><Select options={[]} /></form>;`,
      filename: 'comp.tsx',
      options: [{ controls: ['input', 'select', 'textarea', 'Select'] }],
      errors: [
        { messageId: 'requireFieldWrapper', data: { name: 'Select', field: 'Field' } },
      ],
    },
    // Custom field component name via options
    {
      code: `const C = () => <div><TextInput /></div>;`,
      filename: 'comp.tsx',
      options: [{ controls: ['TextInput'], fieldComponent: 'FormField' }],
      errors: [
        { messageId: 'requireFieldWrapper', data: { name: 'TextInput', field: 'FormField' } },
      ],
    },
  ],
});

console.log('require-field-wrapper: all tests passed');
