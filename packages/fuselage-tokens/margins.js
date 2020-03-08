export default Object.assign({
  none: 0,
  auto: 'auto',
}, ...[
  1,
  2,
  ...Array.from({ length: 9 - 1 }, (_, i) => 4 * (i + 1)),
  ...Array.from({ length: 40 - 1 }, (_, i) => 40 * (i + 1)),
].map((value) => ({
  [`x${ value }`]: `${ value / 16 }rem`,
  [`neg-x${ value }`]: `${ -value / 16 }rem`,
})));
