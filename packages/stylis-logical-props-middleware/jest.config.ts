import type { Config } from 'jest';

export default {
  preset: 'ts-jest',
  testMatch: ['<rootDir>/src/**/*.spec.ts'],
} satisfies Config;
