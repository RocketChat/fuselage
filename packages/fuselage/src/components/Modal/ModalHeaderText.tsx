import React from 'react';

import type { BoxProps } from '../Box';
import Box from '../Box';

export type ModalHeaderTextProps = BoxProps;

export const ModalHeaderText = ({
  children,
  ...props
}: ModalHeaderTextProps) => (
  <Box rcx-modal__header-text {...props}>
    {children}
  </Box>
);
