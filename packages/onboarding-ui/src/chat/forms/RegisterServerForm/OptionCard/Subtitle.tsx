import { Box } from '@rocket.chat/fuselage';
import type { ReactElement, ReactNode } from 'react';

const Subtitle = ({ children }: { children: ReactNode }): ReactElement => (
  <Box fontScale='c2' color='neutral-900' fontWeight='bolder'>
    {children}
  </Box>
);

export default Subtitle;
