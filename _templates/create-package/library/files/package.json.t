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
    "clean": "rimraf dist",
    "build": "run .:build:esm && run .:build:cjs",
    ".:build:esm": "tsc -p tsconfig-esm.json",
    ".:build:cjs": "tsc -p tsconfig-cjs.json",
    "lint": "lint",
    "lint-and-fix": "lint-and-fix",
    "lint-staged": "lint-staged",
    "test": "jest --runInBand",
    "docs": "typedoc"
  },
  "devDependencies": {
    "@rocket.chat/eslint-config-alt": "workspace:~",
    "@rocket.chat/prettier-config": "workspace:~",
    "@types/jest": "~27.4.0",
    "eslint": "~8.8.0",
    "jest": "~27.5.1",
    "lint-all": "workspace:~",
    "lint-staged": "~12.3.3",
    "prettier": "~2.5.1",
    "rimraf": "~3.0.2",
    "ts-jest": "~27.1.3",
    "typedoc": "~0.22.11",
    "typescript": "~4.3.5"
  },
  "eslintConfig": {
    "extends": "@rocket.chat/eslint-config-alt/typescript",
    "env": {
      "jest": true
    }
  },
  "prettier": "@rocket.chat/prettier-config/fuselage",
  "jest": {
    "preset": "ts-jest",
    "errorOnDeprecated": true,
    "testMatch": [
      "<rootDir>/src/**/*.spec.[jt]s?(x)"
    ],
    "globals": {
      "ts-jest": {
        "tsconfig": {
          "noUnusedLocals": false,
          "noUnusedParameters": false
        }
      }
    }
  }
}
