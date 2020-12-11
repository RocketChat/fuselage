import React from 'react';

import { Box } from '../Box';

export const ModalTitle = ({ children, ...props }) => (
  <Box
    rcx-modal__title
    color='default'
    fontScale='h1'
    flexGrow={1}
    flexShrink={1}
    {...props}
  >
    {children}
  </Box>
);
