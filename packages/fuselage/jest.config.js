module.exports = {
  collectCoverageFrom: [
    '<rootDir>/src/components/**/*.{js,jsx,ts,tsx}',
    '!**/*.stories.{js,jsx,ts,tsx}',
  ],
  preset: 'ts-jest/presets/js-with-babel',
  errorOnDeprecated: true,
  testMatch: ['<rootDir>/src/**/*.spec.{ts,tsx}'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.scss$': 'testing-utils/lazySingletonStyleTagModule',
  },
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    'testing-utils/setup/noErrorsLogged',
    '<rootDir>/.jest/setup.ts',
  ],
};
