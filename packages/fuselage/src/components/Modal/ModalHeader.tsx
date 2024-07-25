import React from 'react';

import type { BoxProps } from '../Box';
import Box from '../Box';
import Margins from '../Margins';

export type ModalHeaderProps = BoxProps;

export const ModalHeader = ({ children, ...props }: ModalHeaderProps) => (
  <Box rcx-modal__header is='header' {...props}>
    <Box rcx-modal__header-inner>
      <Margins all='x4'>{children}</Margins>
    </Box>
  </Box>
);
