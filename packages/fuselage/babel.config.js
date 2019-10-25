module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    [
      'babel-plugin-styled-components',
      {
        displayName: false,
        fileName: false,
        minify: false,
        transpileTemplateLiterals: false,
      },
    ],
  ],
};
