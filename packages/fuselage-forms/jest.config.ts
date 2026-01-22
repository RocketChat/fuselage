import type { Config } from 'jest';

export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    '<rootDir>/jest-setup.ts',
    'testing-utils/setup/noErrorsLogged',
  ],
  moduleNameMapper: {
    '\\.scss$': 'testing-utils/lazySingletonStyleTagModule',
  },
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
} satisfies Config;
