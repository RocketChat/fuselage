module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  errorOnDeprecated: true,
  testMatch: [
    '<rootDir>/src/**/*.spec.[jt]s?(x)',
    '<rootDir>/src/**/spec.[jt]s?(x)',
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
