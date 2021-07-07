import { Box } from '@rocket.chat/fuselage';
import React, { ReactElement, ReactNode } from 'react';

const Title = ({ children }: { children: ReactNode }): ReactElement => (
  <Box fontScale='p2' color='default'>
    {children}
  </Box>
);

export default Title;
