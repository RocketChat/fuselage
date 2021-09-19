export const version = process.env.VERSION;

if (process.env.VERSION) {
  console.log(`fuselage-ui-kit version: ${process.env.VERSION}`);
}

export * from './hooks/useUiKitState';
export * from './contexts/kitContext';
export * from './surfaces';
export { UiKitComponent } from './utils/UiKitComponent';
