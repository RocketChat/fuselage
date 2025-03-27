import { Box } from '@rocket.chat/fuselage';
import type { ReactNode } from 'react';

const VerticalWizardLayoutTitle = ({ children }: { children: ReactNode }) => (
  <Box
    fontWeight={500}
    width='100%'
    mbe={18}
    fontSize='x42'
    lineHeight='x62'
    fontFamily='sans'
  >
    {children}
  </Box>
);

export default VerticalWizardLayoutTitle;
