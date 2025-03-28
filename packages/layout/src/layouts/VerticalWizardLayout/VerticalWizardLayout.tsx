import { Box } from '@rocket.chat/fuselage';
import type { ReactElement, ReactNode } from 'react';

import DarkModeProvider from '../../DarkModeProvider';
import BackgroundLayer from '../../components/BackgroundLayer';
import LayoutLogo from '../../components/LayoutLogo';
import type { LayoutContextValue } from '../../contexts/LayoutContext';
import { LayoutContext } from '../../contexts/LayoutContext';

const VerticalWizardLayout = ({
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
          <Box mb={12}>
            <LayoutLogo />
          </Box>
          {children}
        </Box>
      </BackgroundLayer>
    </LayoutContext.Provider>
  </DarkModeProvider>
);

export default VerticalWizardLayout;
