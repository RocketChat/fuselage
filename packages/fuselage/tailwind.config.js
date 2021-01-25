module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['app/**/*.html', 'src/**/*.js'],
  },
  theme: {
    extend: {
      gradientColorStops: ['active', 'group-hover'],
    },
  },
  variants: {},
  plugins: [],
};
