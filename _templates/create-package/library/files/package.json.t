---
to: packages/<%=package%>/package.json
---
{
  "name": "@rocket.chat/<%=package%>",
  "version": "<%=version%>",
  "description": "<%=description%>",
  "author": {
    "name": "Rocket.Chat",
    "url": "https://rocket.chat/"
  },
  "homepage": "https://github.com/RocketChat/fuselage#readme",
  "license": "MIT",
  "publishConfig": {
    "access": "public"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/RocketChat/fuselage.git",
    "directory": "packages/<%=package%>"
  },
  "bugs": {
    "url": "https://github.com/RocketChat/fuselage/issues"
  },
  "main": "dist/cjs/index.js",
  "module": "dist/esm/index.js",
  "types": "dist/esm/index.d.ts",
  "files": [
    "/dist"
  ],
  "scripts": {
    "clean": "rimraf dist",
    "build": "run .:build:esm && run .:build:cjs",
    ".:build:esm": "tsc -p tsconfig.esm.json",
    ".:build:cjs": "tsc -p tsconfig.cjs.json",
    "lint": "lint",
    "lint-and-fix": "lint-and-fix",
    "test": "jest --runInBand",
    "docs": "typedoc"
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
  "jest": {
    "preset": "ts-jest",
    "errorOnDeprecated": true,
    "testMatch": [
      "<rootDir>/src/**/*.spec.[jt]s?(x)"
    ]
  }
}
