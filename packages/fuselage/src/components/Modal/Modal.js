import React from 'react';

import { Box } from '../Box';

export const Modal = React.forwardRef(({ children, ...props }, ref) => (
  <Box is='dialog' rcx-modal {...props}>
    <Box ref={ref} rcx-modal__inner elevation='2'>
      {children}
    </Box>
  </Box>
));
