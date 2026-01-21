import type { Config } from 'jest';

export default {
  preset: 'ts-jest',
  testMatch: ['<rootDir>/src/**/*.spec.[jt]s?(x)'],
} satisfies Config;
