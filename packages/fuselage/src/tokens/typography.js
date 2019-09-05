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

const defaultFontFamily = [...baseFontFamily, ...systemFontFamily];

export default {
  h1: {
    fontFamily: defaultFontFamily,
    fontSize: 22,
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: 32,
  },
  s1: {
    fontFamily: defaultFontFamily,
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: 22,
  },
  s2: {
    fontFamily: defaultFontFamily,
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: 0,
    lineHeight: 22,
  },
  p1: {
    fontFamily: defaultFontFamily,
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: 20,
  },
  p2: {
    fontFamily: defaultFontFamily,
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 0,
    lineHeight: 20,
  },
  c1: {
    fontFamily: defaultFontFamily,
    fontSize: 12,
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: 16,
  },
  c2: {
    fontFamily: defaultFontFamily,
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 0,
    lineHeight: 16,
  },
  micro: {
    fontFamily: defaultFontFamily,
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: 0.2,
    lineHeight: 12,
  },
};
