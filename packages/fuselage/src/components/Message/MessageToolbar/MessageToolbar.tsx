import { forwardRef } from 'react';
import { styled } from 'tamagui';

import { RcxView } from '../../../primitives';
import { ButtonGroup, type ButtonGroupProps } from '../../ButtonGroup';
import { Menu } from '../../Menu';

import MessageToolbarItem from './MessageToolbarItem';
import MessageToolbarWrapper from './MessageToolbarWrapper';

export type MessageToolbarProps = ButtonGroupProps;

const MessageToolbarFrame = styled(RcxView, {
  name: 'MessageToolbar',
  position: 'absolute' as any,
  zIndex: 10,
  top: -24,
  right: 0,
  marginInline: 20,
  padding: 2,
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: '$strokeExtraLight',
  borderRadius: '$x4',
  backgroundColor: '$surfaceRoom',
});

const MessageToolbar = Object.assign(
  forwardRef<HTMLDivElement, MessageToolbarProps>(
    function MessageToolbar(props, ref) {
      return (
        <MessageToolbarFrame>
          <ButtonGroup role='toolbar' ref={ref} small {...props} />
        </MessageToolbarFrame>
      );
    },
  ),
  {
    /** @deprecated prefer using named imports */
    Item: MessageToolbarItem,
    /** @deprecated prefer using named imports */
    Wrapper: MessageToolbarWrapper,
    /** @deprecated prefer using named imports */
    Menu,
  },
);

export default MessageToolbar;
