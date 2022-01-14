import React, { ComponentProps, ForwardRefExoticComponent } from 'react';

import { Box } from '../Box';

type ModalProps = ComponentProps<typeof Box>;

export const Modal: ForwardRefExoticComponent<ModalProps> = React.forwardRef(
  ({ children, ...props }: ModalProps, ref) => (
    <Box is='dialog' rcx-modal {...props}>
      <Box ref={ref} rcx-modal__inner elevation='2'>
        {children}
      </Box>
    </Box>
  )
);
