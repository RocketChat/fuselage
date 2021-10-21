module.exports = {
  preset: 'ts-jest/presets/js-with-babel',
  errorOnDeprecated: true,
  testMatch: [
    '<rootDir>/src/**/*.spec.{ts,tsx}',
    '<rootDir>/src/**/spec.{ts,tsx}',
  ],
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
    '\\.(css|scss)$': '<rootDir>/.jest/styleMock.js',
  },
  setupFiles: ['<rootDir>/.jest/setup.js'],
};
