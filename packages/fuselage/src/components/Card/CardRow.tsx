import type { AllHTMLAttributes, ReactNode } from 'react';
import React from 'react';

import Box from '../Box/Box';

const CardRow = ({
  children,
  ...props
}: { children: ReactNode } & Omit<AllHTMLAttributes<HTMLElement>, 'is'>) => (
  <Box rcx-card__row display='flex' alignItems='center' {...props}>
    {children}
  </Box>
);

export default CardRow;
