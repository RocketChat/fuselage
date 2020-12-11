import React from 'react';

import { Box } from '../Box';

export const ModalFooter = ({ children }) => (
  <Box rcx-modal__footer margin={32}>
    {children}
  </Box>
);
