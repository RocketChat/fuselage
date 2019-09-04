const baseFontFamily = [
  'Inter',
];

const systemFontFamily = [
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Roboto',
  'Oxygen',
  'Ubuntu',
  'Cantarell',
  'Helvetica Neue',
  'Apple Color Emoji',
  'Segoe UI Emoji',
  'Segoe UI Symbol',
  'Meiryo UI',
  'Arial',
  'sans-serif',
];

const defaultFontFamily = [...baseFontFamily, ...systemFontFamily]
  .map((x) => (x.indexOf(' ') < 0 ? x : `'${ x }'`)).join(', ');

export default {
  h1: {
    fontFamily: defaultFontFamily,
    fontSize: '1.375rem',
    fontWeight: 'normal',
    letterSpacing: 0,
    lineHeight: '2rem',
  },
  s1: {
    fontFamily: defaultFontFamily,
    fontSize: '1rem',
    fontWeight: 'normal',
    letterSpacing: 0,
    lineHeight: '1.375rem',
  },
  s2: {
    fontFamily: defaultFontFamily,
    fontSize: '1rem',
    fontWeight: '500',
    letterSpacing: 0,
    lineHeight: '1.375rem',
  },
  p1: {
    fontFamily: defaultFontFamily,
    fontSize: '0.875rem',
    fontWeight: 'normal',
    letterSpacing: 0,
    lineHeight: '1.25rem',
  },
  p2: {
    fontFamily: defaultFontFamily,
    fontSize: '0.875rem',
    fontWeight: '500',
    letterSpacing: 0,
    lineHeight: '1.25rem',
  },
  c1: {
    fontFamily: defaultFontFamily,
    fontSize: '0.75rem',
    fontWeight: 'normal',
    letterSpacing: 0,
    lineHeight: '1rem',
  },
  c2: {
    fontFamily: defaultFontFamily,
    fontSize: '0.75rem',
    fontWeight: '600',
    letterSpacing: 0,
    lineHeight: '1rem',
  },
  micro: {
    fontFamily: defaultFontFamily,
    fontSize: '0.625rem',
    fontWeight: '600',
    letterSpacing: '0.0125rem',
    lineHeight: '0.75rem',
  },
};
