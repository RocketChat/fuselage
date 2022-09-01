import { Box, Tile } from '@rocket.chat/fuselage';
import type { ReactElement, ReactNode } from 'react';

import BackgroundLayer from '../BackgroundLayer';
import DarkModeProvider from '../DarkModeProvider';
import { LayoutLogo } from '../LayoutLogo';
import type { LayoutContextValue } from '../contexts/LayoutContext';
import { LayoutContext } from '../contexts/LayoutContext';

export const VerticalWizardLayoutTitle = ({
  children,
}: {
  children: ReactNode;
}) => (
  <Box
    fontWeight={500}
    width='100%'
    mbe='x18'
    fontSize='x42'
    lineHeight='x62'
    fontFamily='sans'
  >
    {children}
  </Box>
);

export const VerticalWizardLayoutForm = ({
  children,
}: {
  children: ReactNode;
}) => (
  <Tile padding={0} width='100%'>
    {children}
  </Tile>
);

export const VerticalWizardLayoutFooter = ({
  children,
}: {
  children: ReactNode;
}) => (
  <Box display='flex' fontScale='p2' justifyContent='flex-end' pb='x32'>
    {children}
  </Box>
);

export const VerticalWizardLayout = ({
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
          pb={32}
          pi={16}
        >
          <Box mb='x12'>
            <LayoutLogo />
          </Box>
          {children}
        </Box>
      </BackgroundLayer>
    </LayoutContext.Provider>
  </DarkModeProvider>
);
