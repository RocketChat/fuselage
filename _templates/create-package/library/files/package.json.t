---
to: packages/<%=package%>/package.json
sh: |
  cd packages/<%=package%>
  yarn add -D npm-run-all rimraf
  yarn add -D prettier @rocket.chat/prettier-config
  yarn add -D eslint @rocket.chat/eslint-config-alt
  yarn add -D lint-staged
  yarn add -D jest ts-jest @types/jest
  yarn add -D typescript typedoc
  yarn add tslib
---
{
  "name": "@rocket.chat/<%=package%>",
  "version": "<%=version%>",
  "description": "<%=description%>",
  "author": {
    "name": "Rocket.Chat",
    "url": "https://rocket.chat/"
  },
  "homepage": "https://github.com/RocketChat/Rocket.Chat.Fuselage#readme",
  "license": "MIT",
  "publishConfig": {
    "access": "public"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/RocketChat/Rocket.Chat.Fuselage.git",
    "directory": "packages/<%=package%>"
  },
  "bugs": {
    "url": "https://github.com/RocketChat/Rocket.Chat.Fuselage/issues"
  },
  "main": "dist/cjs/index.js",
  "module": "dist/esm/index.js",
  "types": "dist/esm/index.d.ts",
  "files": [
    "/dist"
  ],
  "scripts": {
    "build": "run-s .:build:clean .:build:esm .:build:cjs",
    ".:build:clean": "rimraf dist",
    ".:build:esm": "tsc -p tsconfig-esm.json",
    ".:build:cjs": "tsc -p tsconfig-cjs.json",
    "lint": "eslint src",
    "lint-fix": "eslint --fix src",
    "lint-staged": "lint-staged",
    "test": "jest --runInBand",
    "docs": "typedoc"
  }
}
