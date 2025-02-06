module.exports = (api) => ({
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
      },
    ],
    '@babel/preset-typescript',
    [
      '@babel/preset-react',
      {
        useBuiltIns: true,
        development: api.env() !== 'production',
      },
    ],
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    ['@babel/plugin-transform-class-properties', { loose: true }],
    ['@babel/plugin-transform-private-methods', { loose: true }],
    ['@babel/plugin-transform-private-property-in-object', { loose: true }],
  ],
});
