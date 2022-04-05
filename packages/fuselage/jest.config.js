module.exports = {
  preset: 'ts-jest/presets/js-with-babel',
  errorOnDeprecated: true,
  testMatch: ['<rootDir>/src/**/*.spec.{ts,tsx}'],
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      tsconfig: {
        noUnusedLocals: false,
        noUnusedParameters: false,
        allowJs: true,
      },
    },
  },
  moduleNameMapper: {
    '\\.scss$': 'testing-utils/lazySingletonStyleTagModule',
  },
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    'testing-utils/setup/noErrorsLogged',
    '<rootDir>/.jest/setup.ts',
  ],
};
