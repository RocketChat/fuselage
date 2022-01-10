import { Box } from '@rocket.chat/fuselage';
import type { ReactElement, ReactNode } from 'react';

const Title = ({ children }: { children: ReactNode }): ReactElement => (
  <Box fontScale='p2m' color='default'>
    {children}
  </Box>
);

export default Title;
