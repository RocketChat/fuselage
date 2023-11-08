import { Box } from '@rocket.chat/fuselage';
import type { ReactNode } from 'react';
import React from 'react';

const CardHeader = ({ children }: { children: ReactNode }) => (
  <Box color='default' display='flex' alignItems='center' rcx-card__header>
    {children}
  </Box>
);

export default CardHeader;
