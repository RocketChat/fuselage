import React from 'react';

import { Box, Scrollable } from '../Box';

export const ModalContent = ({ children, onScrollContent, ...props }) => (
  <Scrollable vertical onScrollContent={onScrollContent}>
    <Box rcx-modal__content>
      <Box rcx-modal__content-wrapper {...props}>
        {children}
      </Box>
    </Box>
  </Scrollable>
);
