export * from './components';
export * from './styleTokens';
export { SelectOption } from './types/SelectOption';

if (process.env.VERSION) {
  console.log(`fuselage: ${process.env.VERSION}`);
}
