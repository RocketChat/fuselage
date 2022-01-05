import { ComponentProps, ForwardRefExoticComponent } from 'react';

import { Avatar } from '../Avatar';
import { Box } from '../Box';

type ModalProps = ComponentProps<typeof Box>;
type ModalBackdropProps = ComponentProps<typeof Box>;
type ModalCloseProps = ComponentProps<typeof Box>;
type ModalContentProps = ComponentProps<typeof Box>;
type ModalFooterProps = ComponentProps<typeof Box>;
type ModalHeaderProps = ComponentProps<typeof Box>;
type ModalThumbProps = ComponentProps<typeof Avatar>;
type ModalTitleProps = ComponentProps<typeof Box>;

export const Modal: ForwardRefExoticComponent<ModalProps> & {
  Backdrop: ForwardRefExoticComponent<ModalBackdropProps>;
  Close: ForwardRefExoticComponent<ModalCloseProps>;
  Content: ForwardRefExoticComponent<ModalContentProps>;
  Footer: ForwardRefExoticComponent<ModalFooterProps>;
  Header: ForwardRefExoticComponent<ModalHeaderProps>;
  Thumb: ForwardRefExoticComponent<ModalThumbProps>;
  Title: ForwardRefExoticComponent<ModalTitleProps>;
};
