import type { Config } from 'jest';

export default {
  projects: [
    {
      displayName: 'server',
      testEnvironment: 'node',
      preset: 'ts-jest',
      errorOnDeprecated: true,
      testMatch: ['<rootDir>/src/**/*.server.spec.{ts,tsx}'],
      setupFilesAfterEnv: [
        'testing-utils/setup/noErrorsLogged',
        '<rootDir>/src/jest-setup.ts',
      ],
    },
    {
      displayName: 'client',
      testEnvironment: 'jsdom',
      preset: 'ts-jest',
      errorOnDeprecated: true,
      testMatch: [
        '<rootDir>/src/**/*.spec.{ts,tsx}',
        '!**/*.server.spec.{ts,tsx}',
      ],
      setupFilesAfterEnv: [
        'testing-utils/setup/noErrorsLogged',
        '<rootDir>/src/jest-setup.ts',
      ],
    },
  ],
} satisfies Config;
