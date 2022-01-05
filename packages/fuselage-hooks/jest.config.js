module.exports = {
  preset: 'ts-jest',
  errorOnDeprecated: true,
  testMatch: ['<rootDir>/src/**/*.spec.{ts,tsx}'],
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      tsconfig: {
        noUnusedLocals: false,
        noUnusedParameters: false,
      },
    },
  },
  setupFilesAfterEnv: ['testing-utils/setup/noErrorsLogged'],
};
