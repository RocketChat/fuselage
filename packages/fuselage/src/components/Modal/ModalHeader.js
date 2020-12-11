import React from 'react';

import { Box } from '../Box';
import Margins from '../Margins';

export const ModalHeader = ({ children, ...props }) => (
  <Box is='header' margin={32} {...props}>
    <Box display='flex' margin={-8} alignItems='center' flexWrap='nowrap'>
      <Margins all='x8'>{children}</Margins>
    </Box>
  </Box>
);
