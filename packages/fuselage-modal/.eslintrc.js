module.exports = {
  extends: '@rocket.chat/eslint-config-alt/react',
  env: {
    jest: true,
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
};
