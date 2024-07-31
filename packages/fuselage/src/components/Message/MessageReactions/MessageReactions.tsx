import type { HTMLAttributes, ForwardedRef } from 'react';
import { forwardRef } from 'react';

import { MessageBlock } from '../MessageBlock';
import MessageReaction from './MessageReaction';
import MessageReactionAction from './MessageReactionAction';

/** @public */
export type MessageReactionsProps = HTMLAttributes<HTMLDivElement>;

/** @public */
const MessageReactions = Object.assign(
  forwardRef(function MessageReactions(
    props: MessageReactionsProps,
    ref: ForwardedRef<HTMLDivElement>
  ) {
    return (
      <MessageBlock className='rcx-message-reactions'>
        <div
          ref={ref}
          className='rcx-message-reactions__container'
          {...props}
        />
      </MessageBlock>
    );
  }),
  {
    /** @deprecated use `MessageReaction` instead. */
    Reaction: MessageReaction,
    /** @deprecated use `MessageReactionAction` instead. */
    Action: MessageReactionAction,
  }
);

export default MessageReactions;
