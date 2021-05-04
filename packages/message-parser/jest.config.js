const path = require('path');

module.exports = {
  coverageReporters: [],
  transform: {
    '\\.peg$': path.resolve(__dirname, './loaders/pegtransform.js'),
  },
  preset: 'ts-jest',
  errorOnDeprecated: true,
  testMatch: ['<rootDir>/tests/**/*.(spec|test).ts'],
  moduleFileExtensions: ['js', 'ts', 'peg'],
};
