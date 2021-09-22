import version from './version';

console.log(`fuselage-ui-kit version: ${version}`);

export { version };

export * from './hooks/useUiKitState';
export * from './contexts/kitContext';
export * from './surfaces';
export { UiKitComponent } from './utils/UiKitComponent';
