import { Box } from '@rocket.chat/fuselage';
import React, { ReactElement, ReactNode } from 'react';

const Block = ({ children }: { children: ReactNode }): ReactElement => (
  <Box mb='x16' display='flex' flexDirection='column'>
    {children}
  </Box>
);

export default Block;
