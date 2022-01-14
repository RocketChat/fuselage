import React, { ComponentProps, ForwardRefExoticComponent } from 'react';

import { Box } from '../Box';
import { ModalBackdrop } from './ModalBackdrop';
import { ModalClose } from './ModalClose';
import { ModalContent } from './ModalContent';
import { ModalFooter } from './ModalFooter';
import { ModalHeader } from './ModalHeader';
import { ModalThumb } from './ModalThumb';
import { ModalTitle } from './ModalTitle';

type ModalProps = ComponentProps<typeof Box> & {
  Backdrop: typeof ModalBackdrop;
  Close: typeof ModalClose;
  Content: typeof ModalContent;
  Footer: typeof ModalFooter;
  Header: typeof ModalHeader;
  Thumb: typeof ModalThumb;
  Title: typeof ModalTitle;
};

export const Modal: ForwardRefExoticComponent<ModalProps> = React.forwardRef(
  ({ children, ...props }: ModalProps, ref) => (
    <Box is='dialog' rcx-modal {...props}>
      <Box ref={ref} rcx-modal__inner elevation='2'>
        {children}
      </Box>
    </Box>
  )
);
