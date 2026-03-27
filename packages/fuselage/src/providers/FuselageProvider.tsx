import type { ReactNode } from 'react';
import { TamaguiProvider } from 'tamagui';

import { tamaguiConfig } from '../tamagui.config';

type FuselageProviderProps = {
  children: ReactNode;
  theme?: 'light' | 'dark' | 'high-contrast';
};

export const FuselageProvider = ({
  children,
  theme = 'light',
}: FuselageProviderProps) => (
  <TamaguiProvider
    config={tamaguiConfig}
    defaultTheme={theme}
  >
    {children}
  </TamaguiProvider>
);
