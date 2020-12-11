import React from 'react';

import { Box, Scrollable } from '../Box';
import Margins from '../Margins';

export const ModalContent = ({ children, onScrollContent, ...props }) => (
  <Scrollable vertical onScrollContent={onScrollContent}>
    <Box rcx-modal__content>
      <Margins inline='x32'>
        <Box rcx-modal__content-wrapper {...props}>
          {children}
        </Box>
      </Margins>
    </Box>
  </Scrollable>
);
