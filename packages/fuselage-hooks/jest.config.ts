import type { Config } from 'jest';

export default {
  projects: [
    {
      displayName: 'React 17',
      preset: 'ts-jest',
      errorOnDeprecated: true,
      testMatch: [
        '<rootDir>/src/**/*.spec.{ts,tsx}',
        '!**/*.server.spec.{ts,tsx}',
      ],
      testEnvironment: 'jsdom',
      setupFilesAfterEnv: ['testing-utils/setup/noErrorsLogged'],
      moduleNameMapper: {
        '^react($|/.+)': 'react$1',
        '^react-dom/client$': 'react-dom$1',
        '^react-dom($|/.+)': 'react-dom$1',
      },
    },
    {
      displayName: 'React 17 SSR',
      preset: 'ts-jest',
      errorOnDeprecated: true,
      testMatch: ['<rootDir>/src/**/*.server.spec.{ts,tsx}'],
      testEnvironment: 'node',
      setupFilesAfterEnv: ['testing-utils/setup/noErrorsLogged'],
      moduleNameMapper: {
        '^react($|/.+)': 'react$1',
        '^react-dom/client$': 'react-dom$1',
        '^react-dom($|/.+)': 'react-dom$1',
      },
    },
  ],
} satisfies Config;
