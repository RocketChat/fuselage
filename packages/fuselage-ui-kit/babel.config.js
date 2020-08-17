module.exports = (api) => ({
  presets: [
    ['@babel/preset-env', {
      targets: {
        browsers: [
          'Chrome >= 59',
          'FireFox >= 44',
          'Safari >= 7',
          'Explorer 11',
          'last 4 Edge versions',
        ],
      },
    }],
    ['@babel/preset-react', {
      useBuiltIns: true,
      development: api.env() !== 'production',
    }],
  ],
  plugins: [
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    '@babel/plugin-transform-runtime',
  ],
});
