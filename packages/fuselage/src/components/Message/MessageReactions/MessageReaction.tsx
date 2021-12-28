import React, { forwardRef, HTMLAttributes, ReactNode } from 'react';

import { MessageReactionCounter } from './MessageReactionCounter';
import { MessageReactionEmoji } from './MessageReactionEmoji';

export const MessageReaction = forwardRef<
  HTMLDivElement,
  {
    name?: string;
    counter?: number;
    mine?: boolean;
    children?: ReactNode;
  } & HTMLAttributes<HTMLDivElement>
>(function Reaction(
  { name, counter, mine, children, className, ...props },
  ref
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
});
