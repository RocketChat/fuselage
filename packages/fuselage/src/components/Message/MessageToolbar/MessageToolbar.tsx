import type { ForwardedRef } from 'react';
import { forwardRef } from 'react';

import { ButtonGroup, type ButtonGroupProps } from '../../ButtonGroup';

type MessageToolbarProps = ButtonGroupProps;

export const MessageToolbar = forwardRef(function MessageToolbar(
  props: MessageToolbarProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <div className='rcx-box rcx-box--full rcx-message-toolbar'>
      <ButtonGroup role='toolbar' ref={ref} small {...props} />
    </div>
  );
});
