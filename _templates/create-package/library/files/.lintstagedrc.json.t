---
to: packages/<%=package%>/.lintstagedrc.json
---
{
  "src/**/*.{js,ts}": [
    "yarn eslint --fix --"
  ]
}
