module.exports = {
  extends: '@rocket.chat/eslint-config-alt/minimal',
  env: {
    jest: true,
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: '@rocket.chat/eslint-config-alt/typescript',
    },
  ],
};
