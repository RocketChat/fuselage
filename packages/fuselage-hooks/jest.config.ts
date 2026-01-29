import type { Config } from 'jest';

export default {
  projects: [
    {
      displayName: 'csr',
      preset: 'ts-jest',
      testMatch: [
        '<rootDir>/src/**/*.spec.{ts,tsx}',
        '!**/*.server.spec.{ts,tsx}',
      ],
      testEnvironment: 'jsdom',
      setupFilesAfterEnv: [
        'testing-utils/setup/noErrorsLogged',
        '<rootDir>/src/jest-setup.ts',
      ],
      transformIgnorePatterns: ['node_modules/(?!@rocket\\.chat/emitter)'],
      transform: {
        '^.+\\.tsx?$': [
          'ts-jest',
          {
            tsconfig: {
              module: 'commonjs',
              esModuleInterop: true,
            },
          },
        ],
        '^.+\\.m?js$': [
          'ts-jest',
          {
            tsconfig: {
              module: 'commonjs',
              esModuleInterop: true,
              allowJs: true,
            },
          },
        ],
      },
    },
    {
      displayName: 'ssr',
      preset: 'ts-jest',
      testMatch: ['<rootDir>/src/**/*.server.spec.{ts,tsx}'],
      testEnvironment: 'node',
      setupFilesAfterEnv: [
        'testing-utils/setup/noErrorsLogged',
        '<rootDir>/src/jest-setup.ts',
      ],
      transformIgnorePatterns: ['node_modules/(?!@rocket\\.chat/emitter)'],
      transform: {
        '^.+\\.tsx?$': [
          'ts-jest',
          {
            tsconfig: {
              module: 'commonjs',
              esModuleInterop: true,
            },
          },
        ],
        '^.+\\.m?js$': [
          'ts-jest',
          {
            tsconfig: {
              module: 'commonjs',
              esModuleInterop: true,
              allowJs: true,
            },
          },
        ],
      },
    },
  ],
} satisfies Config;
