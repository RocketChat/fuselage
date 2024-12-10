// @ts-check

import pluginImport from 'eslint-plugin-import';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import * as mdx from 'eslint-plugin-mdx';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
// eslint-disable-next-line import/no-unresolved
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['**/dist/**', '.yarn/**', '**/storybook-static/**'],
  },
  {
    rules: {
      'array-callback-return': ['error', { allowImplicit: true }],
      'block-scoped-var': 'error',
      'complexity': ['warn', 31],
      'curly': ['error', 'all'],
      'dot-notation': ['error', { allowKeywords: true }],
      'dot-location': ['error', 'property'],
      'eqeqeq': ['error', 'allow-null'],
      'guard-for-in': 'error',
      'no-caller': 'error',
      'no-div-regex': 'off',
      'no-else-return': ['error', { allowElseIf: false }],
      'no-empty-function': [
        'error',
        {
          allow: ['arrowFunctions', 'functions', 'methods'],
        },
      ],
      'no-empty-pattern': 'error',
      'no-eval': 'error',
      'no-extend-native': 'error',
      'no-extra-bind': 'error',
      'no-extra-label': 'error',
      'no-fallthrough': 'error',
      'no-floating-decimal': 'error',
      'no-implied-eval': 'error',
      'no-invalid-this': 'off',
      'no-iterator': 'error',
      'no-lone-blocks': 'error',
      'no-loop-func': 'error',
      'no-multi-spaces': 'error',
      'no-multi-str': 'error',
      'no-new-wrappers': 'error',
      'no-octal': 'error',
      'no-proto': 'error',
      'no-redeclare': 'error',
      'no-return-assign': ['error', 'always'],
      'no-return-await': 'error',
      'no-self-compare': 'error',
      'no-sequences': 'error',
      'no-throw-literal': 'error',
      'no-unused-labels': 'error',
      'no-useless-call': 'off',
      'no-useless-concat': 'error',
      'no-useless-return': 'error',
      'no-void': 'error',
      'wrap-iife': ['error', 'outside', { functionPrototypeMethods: false }],
      'yoda': 'error',
    },
  },
  {
    rules: {
      'for-direction': 'error',
      'getter-return': ['error', { allowImplicit: true }],
      'no-async-promise-executor': 'off',
      'no-await-in-loop': 'error',
      'no-compare-neg-zero': 'error',
      'no-cond-assign': 'error',
      'no-constant-condition': 'error',
      'no-control-regex': 'error',
      'no-debugger': 'error',
      'no-dupe-args': 'error',
      'no-dupe-keys': 'error',
      'no-duplicate-case': 'error',
      'no-empty': 'error',
      'no-empty-character-class': 'error',
      'no-ex-assign': 'error',
      'no-extra-boolean-cast': 'error',
      'no-extra-parens': [
        'error',
        'all',
        {
          conditionalAssign: true,
          nestedBinaryExpressions: false,
          returnAssign: true,
          ignoreJSX: 'all',
          enforceForArrowConditionals: false,
        },
      ],
      'no-extra-semi': 'error',
      'no-func-assign': 'error',
      'no-inner-declarations': ['error', 'functions'],
      'no-invalid-regexp': 'error',
      'no-irregular-whitespace': 'error',
      'no-obj-calls': 'error',
      'no-regex-spaces': 'error',
      'no-sparse-arrays': 'error',
      'no-unexpected-multiline': 'error',
      'no-unreachable': 'error',
      'no-unsafe-finally': 'error',
      'no-unsafe-negation': 'error',
      'no-negated-in-lhs': 'error',
      'require-atomic-updates': 'off',
      'use-isnan': 'error',
      'valid-typeof': ['error', { requireStringLiterals: true }],
    },
  },
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {},
  },
  {
    rules: {
      'array-bracket-spacing': ['error', 'never'],
      'block-spacing': 'error',
      'brace-style': ['error', '1tbs', { allowSingleLine: true }],
      'comma-dangle': ['error', 'always-multiline'],
      'comma-spacing': 'error',
      'comma-style': 'error',
      'computed-property-spacing': ['error', 'never'],
      'eol-last': ['error', 'always'],
      'func-call-spacing': ['error', 'never'],
      'indent': ['error', 'tab', { SwitchCase: 1 }],
      'key-spacing': ['error', { beforeColon: false, afterColon: true }],
      'keyword-spacing': 'error',
      'linebreak-style': ['error', 'unix'],
      'lines-between-class-members': [
        'error',
        'always',
        { exceptAfterSingleLine: false },
      ],
      'lines-around-directive': [
        'error',
        {
          before: 'always',
          after: 'always',
        },
      ],
      'max-depth': ['off', 4],
      'new-cap': [
        'error',
        {
          capIsNewExceptions: [
            'Match.Optional',
            'Match.Maybe',
            'Match.OneOf',
            'Match.Where',
            'Match.ObjectIncluding',
            'Push.Configure',
            'SHA256',
          ],
        },
      ],
      'new-parens': 'error',
      'no-array-constructor': 'error',
      'no-lonely-if': 'error',
      'no-mixed-operators': [
        'error',
        {
          // the list of arthmetic groups disallows mixing `%` and `**`
          // with other arithmetic operators.
          groups: [
            ['%', '**'],
            ['%', '+'],
            ['%', '-'],
            ['%', '*'],
            ['%', '/'],
            ['**', '+'],
            ['**', '-'],
            ['**', '*'],
            ['**', '/'],
            ['&', '|', '^', '~', '<<', '>>', '>>>'],
            ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
            ['&&', '||'],
            ['in', 'instanceof'],
          ],
          allowSamePrecedence: false,
        },
      ],
      'no-mixed-spaces-and-tabs': 'error',
      'no-multi-assign': ['error'],
      'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 0 }],
      'no-nested-ternary': 'error',
      'no-spaced-func': 'error',
      'no-trailing-spaces': [
        'error',
        {
          skipBlankLines: false,
          ignoreComments: false,
        },
      ],
      'no-unneeded-ternary': ['error', { defaultAssignment: false }],
      'no-whitespace-before-property': 'error',
      'object-curly-spacing': ['error', 'always'],
      'object-property-newline': [
        'error',
        {
          allowAllPropertiesOnSameLine: true,
        },
      ],
      'one-var': ['error', 'never'],
      'operator-assignment': ['error', 'always'],
      'operator-linebreak': ['error', 'before', { overrides: { '=': 'none' } }],
      'padded-blocks': [
        'error',
        { blocks: 'never', classes: 'never', switches: 'never' },
      ],
      'prefer-object-spread': 'off',
      'quote-props': [
        'error',
        'as-needed',
        { keywords: false, unnecessary: true, numbers: false },
      ],
      'quotes': ['error', 'single', { avoidEscape: true }],
      'semi': ['error', 'always'],
      'semi-spacing': ['error', { before: false, after: true }],
      'semi-style': ['error', 'last'],
      'space-before-blocks': ['error', 'always'],
      'space-before-function-paren': [
        'error',
        { anonymous: 'never', named: 'never', asyncArrow: 'always' },
      ],
      'space-in-parens': ['error', 'never'],
      'space-infix-ops': 'error',
      'spaced-comment': 'error',
      'switch-colon-spacing': ['error', { after: true, before: false }],
    },
  },
  {
    rules: {
      'no-delete-var': 'error',
      'no-undef': 'error',
      'no-unused-vars': [
        'error',
        {
          vars: 'all',
          args: 'after-used',
          ignoreRestSiblings: true,
        },
      ],
      'no-use-before-define': [
        'error',
        { functions: true, classes: true, variables: true },
      ],
    },
  },
  {
    languageOptions: {
      globals: {
        ...globals.es2015,
      },
      parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
          generators: false,
          objectLiteralDuplicateProperties: false,
        },
      },
    },
    rules: {
      'arrow-body-style': [
        'error',
        'as-needed',
        {
          requireReturnForObjectLiteral: false,
        },
      ],
      'arrow-parens': ['error', 'always'],
      'arrow-spacing': ['error', { before: true, after: true }],
      'no-confusing-arrow': [
        'error',
        {
          allowParens: true,
        },
      ],
      'no-const-assign': 'error',
      'no-dupe-class-members': 'error',
      'no-duplicate-imports': 'off',
      'no-this-before-super': 'error',
      'no-useless-computed-key': 'error',
      'no-useless-constructor': 'error',
      'no-useless-rename': [
        'error',
        {
          ignoreDestructuring: false,
          ignoreImport: false,
          ignoreExport: false,
        },
      ],
      'no-var': 'error',
      'object-shorthand': 'error',
      'prefer-const': [
        'error',
        {
          destructuring: 'any',
          ignoreReadBeforeAssign: true,
        },
      ],
      'prefer-destructuring': [
        'error',
        {
          VariableDeclarator: {
            array: false,
            object: true,
          },
          AssignmentExpression: {
            array: false,
            object: false,
          },
        },
        {
          enforceForRenamedProperties: false,
        },
      ],
      'prefer-rest-params': 'error',
      'prefer-template': 'error',
      'rest-spread-spacing': ['error', 'never'],
      'template-curly-spacing': ['error', 'always'],
    },
  },
  {
    languageOptions: {
      globals: {
        ...globals.es2015,
      },
      parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
      },
    },
    plugins: {
      import: pluginImport,
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.mjs', '.js', '.json'],
        },
      },
      'import/extensions': ['.js', '.mjs', '.jsx'],
      'import/core-modules': [],
      'import/ignore': [
        'node_modules',
        '\\.(coffee|scss|css|less|hbs|svg|json)$',
      ],
    },
    rules: {
      'import/no-unresolved': [
        'error',
        {
          commonjs: true,
          caseSensitive: true,
          amd: true,
          ignore: ['^meteor/.+$'],
        },
      ],
      'import/named': 'off',
      'import/default': 'off',
      'import/namespace': 'off',
      'import/export': 'error',
      'import/no-named-as-default': 'off',
      'import/no-named-as-default-member': 'off',
      'import/first': 'error',
      'import/no-duplicates': 'error',
      'import/order': [
        'error',
        {
          'newlines-between': 'always',
          'groups': [
            'builtin',
            'external',
            'internal',
            'parent',
            ['sibling', 'index'],
          ],
          'named': false,
          'warnOnUnassignedImports': false,
          'alphabetize': {
            order: 'asc',
            orderImportKind: 'asc',
            caseInsensitive: false,
          },
        },
      ],
      'import/newline-after-import': 'error',
      'import/no-absolute-path': 'error',
      'import/no-dynamic-require': 'error',
      'import/no-self-import': 'error',
      'import/no-cycle': 'off',
      'import/no-useless-path-segments': 'error',
    },
  },
  eslintPluginPrettierRecommended,
  {
    files: ['**/*.{js,cjs,mjs}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.commonjs,
        ...globals.es6,
        ...globals.node,
        ...globals.jquery,
      },
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2018,
        ecmaFeatures: {
          generators: false,
          objectLiteralDuplicateProperties: false,
        },
      },
    },
  },
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx,cts,ctsx,mts,mtsx}'],
    rules: {
      '@typescript-eslint/no-dupe-class-members': 'error',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      'no-dupe-class-members': 'off',
      'no-empty-function': 'off',
      'no-use-before-define': 'off',
      'no-useless-constructor': 'off',
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
        typescript: {},
      },
    },
  },
  {
    plugins: {
      'jsx-a11y': pluginJsxA11y,
    },
    rules: {
      ...pluginJsxA11y.configs.recommended.rules,
    },
  },
  {
    plugins: {
      'react': pluginReact,
      'react-hooks': pluginReactHooks,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2015,
      },
    },
    rules: {
      'jsx-quotes': ['error', 'prefer-single'],
      'react/display-name': 'error',
      'react/self-closing-comp': 'error',
      'react/jsx-uses-react': 'off',
      'react/jsx-uses-vars': 'error',
      'react/jsx-no-undef': 'error',
      'react/jsx-fragments': ['error', 'syntax'],
      'react/no-multi-comp': 'error',
      'react/react-in-jsx-scope': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    files: [
      '**/*.stories.js',
      '**/*.stories.jsx',
      '**/*.stories.ts',
      '**/*.stories.tsx',
    ],
    rules: {
      'react/display-name': 'off',
      'react/no-multi-comp': 'off',
    },
  },
  {
    files: ['packages/fuselage/**/*.ts?(x)', 'packages/layout/**/*.ts?(x)'],
    rules: {
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-use-before-define': 'off',
      'react/display-name': 'off',
      'react/no-multi-comp': 'off',
    },
  },
  {
    ...mdx.flat,
  },
  {
    ...mdx.flatCodeBlocks,
    rules: {
      ...mdx.flatCodeBlocks.rules,
      'react/self-closing-comp': 'off',
    },
  },
  {
    files: ['packages/fuselage/**/*.{js,mdx}'],
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
  },
  {
    files: ['packages/mp3-encoder/**/*.ts'],
    rules: {
      'new-cap': 'off',
    },
  },
  {
    files: ['tools/testing-utils/**/*.js'],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },
);
