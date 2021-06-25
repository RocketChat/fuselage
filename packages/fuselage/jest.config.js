module.exports = {
  preset: 'ts-jest/presets/js-with-babel',
  errorOnDeprecated: true,
  testMatch: [
    '<rootDir>/src/**/*.spec.{js,ts,tsx}',
    '<rootDir>/src/**/spec.{js,ts,tsx}',
  ],
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
