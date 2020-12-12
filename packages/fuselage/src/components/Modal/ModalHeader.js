import React from 'react';

import { Box } from '../Box';
import Margins from '../Margins';

export const ModalHeader = ({ children, ...props }) => (
  <Box rcx-modal__header is='header' {...props}>
    <Box rcx-modal__header-inner>
      <Margins all='x8'>{children}</Margins>
    </Box>
  </Box>
);
