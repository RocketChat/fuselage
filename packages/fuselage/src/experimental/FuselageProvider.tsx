import { TamaguiProvider } from '@tamagui/core';
import type { ReactNode } from 'react';

import { tamaguiConfig } from './tamagui.config';

/** @public */
export type FuselageProviderProps = {
  children?: ReactNode;
  theme?: keyof typeof tamaguiConfig.themes;
  /**
   * Skips injecting Tamagui's base stylesheet. Useful where the stylesheet is
   * already present or cannot be parsed, such as under jsdom.
   */
  disableInjectCSS?: boolean;
};

/**
 * Supplies the theme context the components under
 * `@rocket.chat/fuselage/experimental` render within.
 *
 * Tamagui throws when a styled component has no theme above it, so mount this
 * once near the root of the application. It renders no visible markup of its
 * own.
 *
 * @public
 */
export const FuselageProvider = ({
  children,
  theme = 'light',
  disableInjectCSS,
}: FuselageProviderProps) => (
  <TamaguiProvider
    config={tamaguiConfig}
    defaultTheme={theme}
    disableInjectCSS={disableInjectCSS}
  >
    {children}
  </TamaguiProvider>
);
