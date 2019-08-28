export default {
  baseFont: [
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
  ].map((x) => (x.indexOf(' ') < 0 ? x : `'${ x }'`)).join(', '),
};
