module.exports = {
  extends: '@rocket.chat/eslint-config-alt/typescript',
  env: {
    jest: true,
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
};
