import type { ComponentProps } from 'react';
import React from 'react';

import Box from '../Box';

export type ModalTaglineProps = ComponentProps<typeof Box>;

export const ModalTagline = ({ children, ...props }: ModalTaglineProps) => (
  <Box rcx-modal__tagline {...props}>
    {children}
  </Box>
);
