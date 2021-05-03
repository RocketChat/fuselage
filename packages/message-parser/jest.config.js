module.exports = {
  projects: ['./tests'],
  coverageReporters: [],
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
    '\\peg$': './src/pegloaderjest.js',
  },
};
