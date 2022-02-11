---
to: packages/<%=package%>/tsconfig.json
---
{
  "compilerOptions": {
    "target": "es5",
    "module": "ESNext",
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,
    "outDir": "./dist/esm",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
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
