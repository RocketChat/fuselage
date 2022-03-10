export * from './components';
export * from './styleTokens';
export { SelectOption } from './types/SelectOption';
export { OptionType } from './types/OptionType';

if (process.env.VERSION) {
  console.log(`fuselage: ${process.env.VERSION}`);
}
