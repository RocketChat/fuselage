module.exports = {
  preset: 'ts-jest',
  errorOnDeprecated: true,
  testMatch: [
    '<rootDir>/src/**/*.spec.[jt]s?(x)',
  ],
  globals: {
    'ts-jest': {
      tsConfig: {
        noUnusedLocals: false,
        noUnusedParameters: false,
      },
    },
  },
};
