---
to: packages/<%=package%>/tsconfig.json
---
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "module": "ESNext",
    "outDir": "./dist/esm",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "moduleResolution": "node",
    "resolveJsonModule": true
  },
  "typedocOptions": {
    "entryPoints": [
      "src/index.ts"
    ],
    "out": "../../static/<%=package%>"
  }
}
