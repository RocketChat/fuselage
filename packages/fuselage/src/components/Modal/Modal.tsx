import React, { ComponentProps, ForwardRefExoticComponent } from 'react';

import { Box } from '../Box';
import { ModalBackdropProps } from './ModalBackdrop';
import { ModalCloseProps } from './ModalClose';
import { ModalContentProps } from './ModalContent';
import { ModalFooterProps } from './ModalFooter';
import { ModalHeaderProps } from './ModalHeader';
import { ModalThumbProps } from './ModalThumb';
import { ModalTitleProps } from './ModalTitle';

type ModalProps = ComponentProps<typeof Box> & {
  Backdrop: ForwardRefExoticComponent<ModalBackdropProps>;
  Close: ForwardRefExoticComponent<ModalCloseProps>;
  Content: ForwardRefExoticComponent<ModalContentProps>;
  Footer: ForwardRefExoticComponent<ModalFooterProps>;
  Header: ForwardRefExoticComponent<ModalHeaderProps>;
  Thumb: ForwardRefExoticComponent<ModalThumbProps>;
  Title: ForwardRefExoticComponent<ModalTitleProps>;
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
