module.exports = {
  preset: 'ts-jest',
  errorOnDeprecated: true,
  testMatch: ['<rootDir>/src/**/*.spec.ts'],
  testEnvironment: 'jsdom',
};
