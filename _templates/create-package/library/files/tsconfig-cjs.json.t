---
to: packages/<%=package%>/tsconfig-cjs.json
---
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "module": "commonjs",
    "outDir": "./dist/cjs"
  },
  "exclude": ["**/*.spec.ts"]
}
