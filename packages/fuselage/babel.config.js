module.exports = (api) => {
  api.cache(false);
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
      'transform-es2015-arrow-functions',
      'transform-class-properties',
      'syntax-class-properties',
    ],
  };
};
