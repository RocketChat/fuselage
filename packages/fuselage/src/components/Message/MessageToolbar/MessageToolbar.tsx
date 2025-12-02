import { forwardRef } from 'react';

import type { ButtonGroupProps } from '../..';
import { ButtonGroup } from '../..';

type MessageToolbarProps = ButtonGroupProps;

export const MessageToolbar = forwardRef<HTMLDivElement, MessageToolbarProps>(
  function MessageToolbar(props, ref) {
    return (
      <div className='rcx-box rcx-box--full rcx-message-toolbar'>
        <ButtonGroup role='toolbar' ref={ref} small {...props} />
      </div>
    );
  },
);
