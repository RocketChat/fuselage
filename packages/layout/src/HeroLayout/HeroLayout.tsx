import { Box, Margins } from '@rocket.chat/fuselage';
import type { ReactElement, ReactNode } from 'react';

import BackgroundLayer from '../BackgroundLayer';
import DarkModeProvider from '../DarkModeProvider';
import { LayoutLogo } from '../LayoutLogo';
import type { LayoutContextValue } from '../contexts/LayoutContext';
import { LayoutContext } from '../contexts/LayoutContext';

export const HeroLayoutTitle = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => <Box fontScale='hero'>{children}</Box>;

export const HeroLayoutSubtitle = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => <Box fontScale='p1'>{children}</Box>;

export const HeroLayout = ({
  children,
  forceDarkMode,
  ...rest
}: LayoutContextValue & {
  children: ReactNode;
}): ReactElement => (
  <DarkModeProvider forcedDarkMode={forceDarkMode}>
    <LayoutContext.Provider value={{ ...rest }}>
      <BackgroundLayer>
        <Box
          display='flex'
          flexDirection='column'
          alignItems='center'
          textAlign='center'
          width='100%'
          maxWidth={576}
          paddingBlock={32}
          paddingInline={16}
        >
          <Margins blockEnd={32}>
            <LayoutLogo />

            {children}
          </Margins>
        </Box>
      </BackgroundLayer>
    </LayoutContext.Provider>
  </DarkModeProvider>
);
