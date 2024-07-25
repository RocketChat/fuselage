import React from 'react';

import type { BoxProps } from '../Box';
import Box from '../Box';

export type ModalTaglineProps = BoxProps;

export const ModalTagline = ({ children, ...props }: ModalTaglineProps) => (
  <Box rcx-modal__tagline {...props}>
    {children}
  </Box>
);
