import React from 'react';

import { Avatar } from '../Avatar';
import { Box, Flex, Margins, MarginsWrapper, Scrollable } from '../Box';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { Tile } from '../Tile';
import { ModalBackdrop, ModalContainer, ModalPortal, ModalStack } from './Stack';

export const Modal = ({ children, ...props }) =>
  <Flex.Container>
    <Box is='dialog' componentClassName='rcx-modal' { ...props }>
      <Flex.Container direction='column'>
        <Flex.Item grow={1}>
          <Tile elevation='2' className='rcx-modal__inner' padding='none'>
            {children}
          </Tile>
        </Flex.Item>
      </Flex.Container>
    </Box>
  </Flex.Container>;

export const ModalHeader = ({ children, ...props }) =>
  <Margins all={32}>
    <Box is='header' {...props}>
      <Flex.Container alignItems='center' wrap='nowrap'>
        <MarginsWrapper all={8}>
          <Box>
            <Margins all={8}>
              {children}
            </Margins>
          </Box>
        </MarginsWrapper>
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

export const ModalContent = ({ children }) =>
  <Scrollable vertical>
    <Box componentClassName='rcx-modal__content'>
      <Margins inline={32}>
        <Box componentClassName='rcx-modal__content-wrapper'>
          {children}
        </Box>
      </Margins>
    </Box>
  </Scrollable>;

export const ModalFooter = ({ children }) =>
  <Margins all={32}>
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
