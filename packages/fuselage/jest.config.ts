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
  transformIgnorePatterns: [
    'node_modules/(?!@rocket\.chat/(memo|css-supports|stylis-logical-props-middleware))',
  ],
  transform: {
    '^.+\\.(tsx?|m?js)$': [
      'ts-jest',
      {
        tsconfig: {
          module: 'commonjs',
          esModuleInterop: true,
        },
      },
    ],
  },
} satisfies Config;
