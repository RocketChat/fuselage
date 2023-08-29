import type { ComponentProps } from 'react';
import React from 'react';

import Box from '../Box';

export type ModalTitleProps = ComponentProps<typeof Box>;

export const ModalTitle = ({ children, ...props }: ModalTitleProps) => (
  <Box is='h2' rcx-modal__title {...props}>
    {children}
  </Box>
);
