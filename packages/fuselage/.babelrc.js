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
});
