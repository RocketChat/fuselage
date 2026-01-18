import { forwardRef } from 'react';

import { ButtonGroup, type ButtonGroupProps } from '../../ButtonGroup';

export type MessageToolbarProps = ButtonGroupProps;

const MessageToolbar = forwardRef<HTMLDivElement, MessageToolbarProps>(
  function MessageToolbar(props, ref) {
    return (
      <div className='rcx-box rcx-box--full rcx-message-toolbar'>
        <ButtonGroup role='toolbar' ref={ref} small {...props} />
      </div>
    );
  },
);

export default MessageToolbar;
