import type { Config } from 'jest';

export default {
  preset: 'ts-jest',
  testMatch: ['<rootDir>/src/**/*.spec.ts?(x)'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/jest-setup.ts'],
} satisfies Config;
