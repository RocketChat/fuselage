import type { ComponentProps, Ref } from 'react';
import React, { forwardRef } from 'react';

import { Box } from '../Box';

type ModalProps = ComponentProps<typeof Box>;

export const Modal = forwardRef(
  ({ children, ...props }: ModalProps, ref: Ref<HTMLDivElement>) => (
    <Box is='dialog' rcx-modal {...props}>
      <Box ref={ref} rcx-modal__inner elevation='2'>
        {children}
      </Box>
    </Box>
  )
);
