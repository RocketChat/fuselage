import React, { ComponentProps, FC } from 'react';

import { Box } from '../Box';
import { Scrollable } from '../Box/Scrollable';

export type ModalContentProps = ComponentProps<typeof Box> & {
  onScrollContent?: ((touching: { top: boolean }) => void) | undefined;
};

export const ModalContent: FC<ModalContentProps> = ({
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
