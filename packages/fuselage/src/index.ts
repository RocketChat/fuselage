import './index.scss';

export * from './components';
export * from './styleTokens';

export { useArrayLikeClassNameProp } from '@rocket.chat/fuselage-box';

// Tamagui v3 exports
export { FuselageProvider } from './providers/FuselageProvider';
export { tamaguiConfig, tokens } from './tamagui.config';
export { lightTheme, darkTheme, highContrastTheme } from './themes';
export {
  RcxView,
  RcxText,
  RcxInteractive,
  RcxInteractiveText,
} from './primitives';

export * from '@rocket.chat/fuselage-box';

// Compatibility layer for Box props on Tamagui styled() components
export { withBoxProps, extractBoxProps } from './utilities/boxCompat';
export type { BoxCompatProps } from './utilities/boxCompat';
