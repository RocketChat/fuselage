import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';

import { MessageBlock } from '../MessageBlock';

export const MessageReactions = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(function MessageReactions(props, ref) {
  return (
    <MessageBlock className='rcx-message-reactions'>
      <div ref={ref} className='rcx-message-reactions__container' {...props} />
    </MessageBlock>
  );
});
