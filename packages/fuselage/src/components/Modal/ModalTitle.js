import React from 'react';

import { Box } from '../Box';

export const ModalTitle = ({ children, ...props }) => (
  <Box rcx-modal__title {...props}>
    {children}
  </Box>
);
