import React from 'react';

import { Avatar } from '../Avatar';
import { Box, Scrollable } from '../Box';
import { Button } from '../Button';
import { Icon } from '../Icon';
import Margins from '../Margins';
import {
  ModalBackdrop,
  ModalContainer,
  ModalPortal,
  ModalStack,
  useModalStack,
} from './Stack';

export const Modal = React.forwardRef(({ children, ...props }, ref) => (
  <Box is='dialog' rcx-modal display='flex' {...props}>
    <Box
      ref={ref}
      rcx-modal__inner
      elevation='2'
      display='flex'
      flexDirection='column'
      flexGrow={1}
      padding='none'
    >
      {children}
    </Box>
  </Box>
));

export const ModalHeader = ({ children, ...props }) => (
  <Box is='header' margin={32} {...props}>
    <Box display='flex' margin={-8} alignItems='center' flexWrap='nowrap'>
      <Margins all='x8'>{children}</Margins>
    </Box>
  </Box>
);

export const ModalThumb = (props) => (
  <Box>
    <Avatar size='x32' {...props} />
  </Box>
);

export const ModalTitle = ({ children, ...props }) => (
  <Box
    rcx-modal__title
    color='default'
    fontScale='h1'
    flexGrow={1}
    flexShrink={1}
    {...props}
  >
    {children}
  </Box>
);

export const ModalClose = (props) => (
  <Button small ghost flexShrink={0} {...props}>
    <Icon name='cross' size='x24' />
  </Button>
);

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

export const ModalFooter = ({ children }) => (
  <Box rcx-modal__footer margin={32}>
    {children}
  </Box>
);

export {
  ModalBackdrop,
  ModalContainer,
  ModalPortal,
  ModalStack,
  useModalStack,
};

Modal.Header = ModalHeader;
Modal.Thumb = ModalThumb;
Modal.Title = ModalTitle;
Modal.Close = ModalClose;
Modal.Content = ModalContent;
Modal.Footer = ModalFooter;
Modal.Backdrop = ModalBackdrop;
Modal.Container = ModalContainer;
Modal.Portal = ModalPortal;
Modal.Stack = ModalStack;
