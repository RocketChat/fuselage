import type { ComponentProps, ForwardedRef } from 'react';
import { forwardRef } from 'react';

import { ButtonGroup } from '../..';

type MessageToolbarProps = ComponentProps<typeof ButtonGroup>;

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
