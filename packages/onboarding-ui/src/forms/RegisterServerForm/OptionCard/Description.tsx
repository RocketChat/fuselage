import { Box } from '@rocket.chat/fuselage';
import type { ReactElement, ReactNode } from 'react';

const Description = ({ children }: { children: ReactNode }): ReactElement => (
  <Box fontScale='c1' color='info'>
    {children}
  </Box>
);

export default Description;
