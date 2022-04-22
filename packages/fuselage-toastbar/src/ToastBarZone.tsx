import { Box } from '@rocket.chat/fuselage';
import type { ReactNode, ReactElement } from 'react';
import React from 'react';

const ToastBarZone = ({ children }: { children: ReactNode }): ReactElement => (
  <Box position='fixed'>
    <Box>{children}</Box>
  </Box>
);

export default ToastBarZone;
