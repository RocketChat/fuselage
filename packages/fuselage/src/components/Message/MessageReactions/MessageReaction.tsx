import type { HTMLAttributes, ReactNode, Ref } from 'react';
import React, { forwardRef } from 'react';

import { MessageReactionCounter } from './MessageReactionCounter';
import { MessageReactionEmoji } from './MessageReactionEmoji';

type MessageReactionProps = {
  name?: string;
  counter?: number;
  mine?: boolean;
  children?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export const MessageReaction = forwardRef(function Reaction(
  { name, counter, mine, children, className, ...props }: MessageReactionProps,
  ref: Ref<HTMLDivElement>
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
