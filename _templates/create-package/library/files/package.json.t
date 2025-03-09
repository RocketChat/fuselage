---
to: packages/<%=package%>/package.json
---
{
  "name": "@rocket.chat/<%=package%>",
  "version": "<%=version%>",
  "description": "<%=description%>",
  "homepage": "https://github.com/RocketChat/fuselage#readme",
  "bugs": {
    "url": "https://github.com/RocketChat/fuselage/issues"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/RocketChat/fuselage.git",
    "directory": "packages/<%=package%>"
  },
  "license": "MIT",
  "author": {
    "name": "Rocket.Chat",
    "url": "https://rocket.chat/"
  },
  "main": "dist/cjs/index.js",
  "module": "dist/esm/index.js",
  "types": "dist/esm/index.d.ts",
  "files": [
    "/dist"
  ],
  "scripts": {
    ".:build:cjs": "tsc -p tsconfig.cjs.json",
    ".:build:esm": "tsc -p tsconfig.esm.json",
    "build": "run .:build:esm && run .:build:cjs",
    "clean": "rimraf dist",
    "docs": "typedoc",
    "lint": "lint",
    "lint-and-fix": "lint-and-fix",
    "test": "jest --runInBand"
  },
  "jest": {
    "errorOnDeprecated": true,
    "preset": "ts-jest",
    "testMatch": [
      "<rootDir>/src/**/*.spec.[jt]s?(x)"
    ]
  },
  "devDependencies": {
    "@types/jest": "~27.4.0",
    "eslint": "~8.8.0",
    "jest": "~27.5.1",
    "lint-all": "workspace:~",
    "prettier": "~3.3.3",
    "rimraf": "~6.0.1",
    "ts-jest": "~27.1.3",
    "typedoc": "~0.24.1",
    "typescript": "~5.5.4"
  },
  "publishConfig": {
    "access": "public"
  }
}
