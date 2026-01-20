import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';

import MessageBlock from '../MessageBlock';

export type MessageReactionsProps = HTMLAttributes<HTMLDivElement>;

const MessageReactions = forwardRef<HTMLDivElement, MessageReactionsProps>(
  function MessageReactions(props, ref) {
    return (
      <MessageBlock className='rcx-message-reactions'>
        <div
          ref={ref}
          className='rcx-message-reactions__container'
          role='group'
          aria-label='Message reactions'
          {...props}
        />
      </MessageBlock>
    );
  },
);

export default MessageReactions;
