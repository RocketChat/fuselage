import type { HTMLAttributes, ReactNode, ForwardedRef } from 'react';
import React, { forwardRef } from 'react';

import MessageReactionCounter from './MessageReactionCounter';
import MessageReactionEmoji from './MessageReactionEmoji';

/** @public */
export type MessageReactionProps = {
  name?: string;
  counter?: number;
  mine?: boolean;
  children?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

/** @public */
const MessageReaction = forwardRef(function Reaction(
  { name, counter, mine, children, className, ...props }: MessageReactionProps,
  ref: ForwardedRef<HTMLDivElement>
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
});

export default MessageReaction;
