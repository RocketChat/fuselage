module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['app/**/*.html'],
  },
  theme: {
    extend: {
      gradientColorStops: ['active', 'group-hover'],
    },
  },
  variants: {},
  plugins: [],
};
