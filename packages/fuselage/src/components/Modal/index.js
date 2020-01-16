import React from 'react';

import { Avatar } from '../Avatar';
import { Box, Flex, Margins, Scrollable } from '../Box';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { Tile } from '../Tile';
import { ModalBackdrop, ModalContainer, ModalPortal, ModalStack } from './Stack';

// https://www.w3.org/TR/wai-aria-practices/examples/dialog-modal/dialog.html

export const Modal = React.forwardRef(({ children, ...props }, ref) =>
  <Flex.Container>
    <Box is='dialog' componentClassName='rcx-modal' { ...props }>
      <Flex.Container direction='column'>
        <Flex.Item grow={1}>
          <Tile ref={ref} elevation='2' className='rcx-modal__inner' padding='none'>
            {children}
          </Tile>
        </Flex.Item>
      </Flex.Container>
    </Box>
  </Flex.Container>);

export const ModalHeader = ({ children, ...props }) =>
  <Margins all='x32'>
    <Box is='header' {...props}>
      <Flex.Container alignItems='center' wrap='no-wrap'>
        <Margins all='neg-x8'>
          <Box>
            <Margins all='x8'>
              {children}
            </Margins>
          </Box>
        </Margins>
      </Flex.Container>
    </Box>
  </Margins>;

export const ModalThumb = (props) => <Avatar size='x32' {...props} />;

export const ModalTitle = ({ children, ...props }) =>
  <Flex.Item grow={1} shrink={1}>
    <Box componentClassName='rcx-modal__title' textColor='default' textStyle='h1' {...props}>
      {children}
    </Box>
  </Flex.Item>;

export const ModalClose = (props) => <Flex.Item shrink={0}>
  <Button small ghost {...props}>
    <Icon name='cross' size='x24' />
  </Button>
</Flex.Item>;

export const ModalContent = ({ children, ...props }) =>
  <Scrollable vertical>
    <Box componentClassName='rcx-modal__content'>
      <Margins inline={'x32'}>
        <Box componentClassName='rcx-modal__content-wrapper' {...props}>
          {children}
        </Box>
      </Margins>
    </Box>
  </Scrollable>;

export const ModalFooter = ({ children }) =>
  <Margins all={'x32'}>
    <Box componentClassName='rcx-modal__footer'>
      {children}
    </Box>
  </Margins>;

export {
  ModalBackdrop,
  ModalContainer,
  ModalPortal,
  ModalStack,
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
