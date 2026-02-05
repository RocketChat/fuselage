import type { HTMLAttributes, ReactNode } from 'react';
import { forwardRef } from 'react';

import MessageReactionCounter from './MessageReactionCounter';
import MessageReactionEmoji from './MessageReactionEmoji';

export type MessageReactionProps = {
  name?: string;
  counter?: number;
  mine?: boolean;
  children?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const MessageReaction = forwardRef<HTMLDivElement, MessageReactionProps>(
  function Reaction(
    { name, counter, mine, children, className, ...props },
    ref,
  ) {
    return (
      <div
        className={[
          `rcx-message-reactions__reaction`,
          mine && 'rcx-message-reactions__reaction--mine',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        ref={ref}
        role='button'
        tabIndex={0}
        {...props}
      >
        {children || (
          <>
            {name && <MessageReactionEmoji name={name} />}
            {counter && <MessageReactionCounter counter={counter} />}
          </>
        )}
      </div>
    );
  },
);

export default MessageReaction;
