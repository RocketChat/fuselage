/* Visible before/after demo. Run: node poc/box-compiler/demo.cjs
   Uses a fake resolver for illustration; the jest spec wires the real one. */
const { transformSync } = require('@babel/core');

const plugin = require('./plugin.cjs');

const resolve = (props) =>
  Object.entries(props).map(([k, v]) => ({
    className: `rcx-${k}-${v}`.replace(/[^a-z0-9-]/gi, '-'),
    css: `.rcx-${k}-${v}{${k}:${v}}`,
  }));

const src = `const Card = () => <Box p="x8" display="flex" bg="tint" className={cls}>hi</Box>;`;
const sheet = new Map();
const out = transformSync(src, {
  configFile: false,
  babelrc: false,
  plugins: [
    '@babel/plugin-syntax-jsx',
    [plugin, { styleProps: ['p', 'display', 'bg'], resolve, sheet }],
  ],
});

console.log('IN : ', src);
console.log('OUT: ', out.code);
console.log('CSS: ', [...sheet.values()].join(' '));
