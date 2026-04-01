import type { Config } from 'jest';

export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    '<rootDir>/jest-setup.ts',
    'testing-utils/setup/noErrorsLogged',
  ],
  moduleNameMapper: {
    '\\.scss$': 'testing-utils/lazySingletonStyleTagModule',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(@rocket\\.chat/fuselage-box|tamagui|@tamagui)/)',
  ],
} satisfies Config;
