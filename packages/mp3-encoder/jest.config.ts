import type { Config } from 'jest';

export default {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^(\\.\\.\?\\/.+)\\.js$': '$1',
  },
} satisfies Config;
