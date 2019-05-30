module.exports = (api) => {
  api.cache(true);
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            browsers: [
              'Chrome >= 59',
              'FireFox >= 44',
              'Safari >= 7',
              'Explorer 11',
              'last 4 Edge versions',
            ],
          },
          useBuiltIns: 'entry',
        },
      ],
      '@babel/preset-react',
    ],
    plugins: [
      'emotion',
      '@babel/plugin-transform-destructuring',
      '@babel/plugin-proposal-class-properties',
      'transform-es2015-arrow-functions',
      'syntax-class-properties',
    ],
  };
};
