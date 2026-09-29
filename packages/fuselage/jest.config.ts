import type { Config } from 'jest';

export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  // jsdom defaults to the `browser` export condition, which resolves
  // @tamagui/core to its ESM build; jest cannot parse it untransformed.
  testEnvironmentOptions: {
    customExportConditions: ['node', 'require', 'default'],
  },
  testMatch: [
    '<rootDir>/src/**/*.spec.{ts,tsx}',
    '!**/visualRegression.spec.ts',
  ],
  setupFilesAfterEnv: [
    '<rootDir>/jest-setup.ts',
    'testing-utils/setup/noErrorsLogged',
  ],
  moduleNameMapper: {
    '\\.scss$': 'testing-utils/lazySingletonStyleTagModule',
  },
} satisfies Config;
