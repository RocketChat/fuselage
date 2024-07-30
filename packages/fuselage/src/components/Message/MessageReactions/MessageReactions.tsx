import type { HTMLAttributes, ForwardedRef } from 'react';
import React, { forwardRef } from 'react';

import { MessageBlock } from '../MessageBlock';

export const MessageReactions = forwardRef(function MessageReactions(
  props: HTMLAttributes<HTMLDivElement>,
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <MessageBlock className='rcx-message-reactions'>
      <div ref={ref} className='rcx-message-reactions__container' {...props} />
    </MessageBlock>
  );
});
