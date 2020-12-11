import React from 'react';

import { Box } from '../Box';

export const Modal = React.forwardRef(({ children, ...props }, ref) => (
  <Box is='dialog' rcx-modal display='flex' {...props}>
    <Box
      ref={ref}
      rcx-modal__inner
      elevation='2'
      display='flex'
      flexDirection='column'
      flexGrow={1}
      padding='none'
    >
      {children}
    </Box>
  </Box>
));
