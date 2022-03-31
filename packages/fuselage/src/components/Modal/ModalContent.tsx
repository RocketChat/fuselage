import type { ComponentProps } from 'react';
import React from 'react';

import Box from '../Box';
import Scrollable from '../Scrollable';

export type ModalContentProps = ComponentProps<typeof Box> & {
  onScrollContent?: ((touching: { top: boolean }) => void) | undefined;
};

export const ModalContent = ({
  children,
  onScrollContent,
  ...props
}: ModalContentProps) => (
  <Scrollable vertical onScrollContent={onScrollContent}>
    <Box rcx-modal__content>
      <Box rcx-modal__content-wrapper {...props}>
        {children}
      </Box>
    </Box>
  </Scrollable>
);
