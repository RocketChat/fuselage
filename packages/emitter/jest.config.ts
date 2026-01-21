import type { Config } from 'jest';

export default {
  preset: 'ts-jest',
  testMatch: ['**/src/**/*.spec.[jt]s?(x)'],
} satisfies Config;
