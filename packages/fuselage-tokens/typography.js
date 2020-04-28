const fontSans = [
  'Inter',
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
  'sans-serif'
];

const fontMono = [
  'Menlo',
  'Monaco',
  'Consolas',
  'Liberation Mono',
  'Courier New',
  'monospace'
];

export default {
  fontFamilies: {
    sans: fontSans,
    mono: fontMono,
  },
  fontScales: {
    h1: {
      fontSize: 22,
      fontWeight: 400,
      letterSpacing: 0,
      lineHeight: 32,
    },
    s1: {
      fontSize: 16,
      fontWeight: 400,
      letterSpacing: 0,
      lineHeight: 22,
    },
    s2: {
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: 0,
      lineHeight: 22,
    },
    p1: {
      fontSize: 14,
      fontWeight: 400,
      letterSpacing: 0,
      lineHeight: 20,
    },
    p2: {
      fontSize: 14,
      fontWeight: 500,
      letterSpacing: 0,
      lineHeight: 20,
    },
    c1: {
      fontSize: 12,
      fontWeight: 400,
      letterSpacing: 0,
      lineHeight: 16,
    },
    c2: {
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: 0,
      lineHeight: 16,
    },
    micro: {
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: 0.2,
      lineHeight: 12,
    },
  },
}
