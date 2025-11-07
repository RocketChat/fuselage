import type { HTMLAttributes, Ref } from 'react';
import { forwardRef } from 'react';

import { MessageBlock } from '../MessageBlock.js';

export const MessageReactions = forwardRef(function MessageReactions(
  props: HTMLAttributes<HTMLDivElement>,
  ref: Ref<HTMLDivElement>,
) {
  return (
    <MessageBlock className='rcx-message-reactions'>
      <div ref={ref} className='rcx-message-reactions__container' {...props} />
    </MessageBlock>
  );
});
