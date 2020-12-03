module.exports = {
  preset: 'ts-jest/presets/js-with-babel',
  testMatch: [
    '<rootDir>/src/**/*.(spec|test).{js,ts,tsx}',
    '<rootDir>/src/**/(spec|test).{js,ts,tsx}',
  ],
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/.jest/styleMock.js',
  },
  setupFiles: ['<rootDir>/.jest/setup.js'],
  globals: {
    'ts-jest': {
      tsconfig: {
        noUnusedLocals: false,
        noUnusedParameters: false,
      },
    },
  },
};
