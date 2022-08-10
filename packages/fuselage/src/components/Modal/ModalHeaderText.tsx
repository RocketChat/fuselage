import type { ComponentProps } from 'react';
import React from 'react';

import Box from '../Box';

export type ModalHeaderTextProps = ComponentProps<typeof Box>;

export const ModalHeaderText = ({
  children,
  ...props
}: ModalHeaderTextProps) => (
  <Box rcx-modal__header-text {...props}>
    {children}
  </Box>
);
