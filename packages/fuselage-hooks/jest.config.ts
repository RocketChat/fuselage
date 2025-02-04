import type { Config } from 'jest';

export default {
  projects: [
    {
      displayName: 'csr',
      preset: 'ts-jest',
      errorOnDeprecated: true,
      testMatch: [
        '<rootDir>/src/**/*.spec.{ts,tsx}',
        '!**/*.server.spec.{ts,tsx}',
      ],
      testEnvironment: 'jsdom',
      setupFilesAfterEnv: [
        'testing-utils/setup/noErrorsLogged',
        '<rootDir>/src/jest-setup.ts',
      ],
    },
    {
      displayName: 'ssr',
      preset: 'ts-jest',
      errorOnDeprecated: true,
      testMatch: ['<rootDir>/src/**/*.server.spec.{ts,tsx}'],
      testEnvironment: 'node',
      setupFilesAfterEnv: [
        'testing-utils/setup/noErrorsLogged',
        '<rootDir>/src/jest-setup.ts',
      ],
    },
  ],
} satisfies Config;
