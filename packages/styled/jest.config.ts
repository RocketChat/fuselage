import type { Config } from 'jest';

export default {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^(\\.\\.?\\/.*)\\.js$': '$1',
  },
  transformIgnorePatterns: [
    'node_modules/(?!@rocket\\.chat/(memo|css-supports|css-in-js|stylis-logical-props-middleware))',
  ],
} satisfies Config;
