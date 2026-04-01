import type { Config } from 'jest';

export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/jest-setup.ts'],
  transformIgnorePatterns: [
    'node_modules/(?!(@rocket\\.chat/fuselage-box|@rocket\\.chat/fuselage|tamagui|@tamagui)/)',
  ],
} satisfies Config;
