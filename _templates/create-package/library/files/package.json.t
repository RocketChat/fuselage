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
    "@types/jest": "~29.4.0",
    "eslint": "~8.35.0",
    "jest": "~29.4.3",
    "lint-all": "workspace:~",
    "lint-staged": "~13.1.2",
    "prettier": "~2.7.1",
    "rimraf": "~4.1.2",
    "ts-jest": "~29.0.5",
    "typedoc": "~0.23.26",
    "typescript": "~4.9.5"
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
