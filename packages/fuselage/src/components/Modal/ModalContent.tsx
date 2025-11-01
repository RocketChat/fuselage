import type { ComponentProps } from 'react';

import Box from '../Box/index.js';
import Scrollable from '../Scrollable/index.js';

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
      <Box rcx-modal__content-wrapper mi={24} {...props}>
        {children}
      </Box>
    </Box>
  </Scrollable>
);
