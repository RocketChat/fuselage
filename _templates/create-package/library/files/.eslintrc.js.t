---
to: packages/<%=package%>/.eslintrc.js
---
module.exports = {
  extends: '@rocket.chat/eslint-config-alt/typescript',
  env: {
    jest: true,
  },
};
