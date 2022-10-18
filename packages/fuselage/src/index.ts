export * from './components';
export * from './styleTokens';
export { Palette, __setThrowErrorOnInvalidToken__ } from './Theme';

if (process.env.VERSION) {
  console.log(`fuselage: ${process.env.VERSION}`);
}
