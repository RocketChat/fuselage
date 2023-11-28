import type { AllHTMLAttributes, ReactNode } from 'react';
import React from 'react';

import Box from '../Box/Box';

const CardCol = ({
  children,
  ...props
}: { children: ReactNode } & Omit<AllHTMLAttributes<HTMLElement>, 'is'>) => (
  <Box rcx-card__col display='flex' flexDirection='column' {...props}>
    {children}
  </Box>
);

export default CardCol;
