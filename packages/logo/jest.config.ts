import type { Config } from 'jest';

export default {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^(\\.\\.?\\/.*)\\.js$': '$1',
  },
  transformIgnorePatterns: [
    'node_modules/(?!@rocket\\.chat/(memo|css-supports|stylis-logical-props-middleware|styled|fuselage-hooks))',
  ],
} satisfies Config;
