import { forwardRef } from 'react';

import { ButtonGroup, type ButtonGroupProps } from '../../ButtonGroup';
import { Menu } from '../../Menu';

import MessageToolbarItem from './MessageToolbarItem';
import MessageToolbarWrapper from './MessageToolbarWrapper';

export type MessageToolbarProps = ButtonGroupProps;

const MessageToolbar = Object.assign(
  forwardRef<HTMLDivElement, MessageToolbarProps>(
    function MessageToolbar(props, ref) {
      return (
        <div className='rcx-box rcx-box--full rcx-message-toolbar'>
          <ButtonGroup role='toolbar' ref={ref} small {...props} />
        </div>
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
