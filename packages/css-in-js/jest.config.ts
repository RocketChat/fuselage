import type { Config } from 'jest';

export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transformIgnorePatterns: [
    'node_modules/(?!@rocket\\.chat/(memo|css-supports|stylis-logical-props-middleware))',
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
