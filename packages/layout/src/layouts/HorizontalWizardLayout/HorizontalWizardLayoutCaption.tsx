import { Box } from '@rocket.chat/fuselage';
import type { ReactElement, ReactNode } from 'react';

import { useDarkMode } from '../../DarkModeProvider';

const HorizontalWizardLayoutCaption = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => {
  const isDark = useDarkMode();
  return (
    <Box
      display='inline-block'
      flexDirection='row'
      fontScale='c1'
      color={isDark ? 'font-white' : 'font-secondary-info'}
      mb={16}
      alignItems='center'
    >
      {children}
    </Box>
  );
};

export default HorizontalWizardLayoutCaption;
