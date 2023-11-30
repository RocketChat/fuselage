import type { AllHTMLAttributes, ReactNode } from 'react';
import React from 'react';

import Box from '../Box/Box';

const CardHeader = ({
  children,
}: { children: ReactNode } & Omit<AllHTMLAttributes<HTMLElement>, 'is'>) => (
  <Box color='default' display='flex' alignItems='center' rcx-card__header>
    {children}
  </Box>
);

export default CardHeader;
