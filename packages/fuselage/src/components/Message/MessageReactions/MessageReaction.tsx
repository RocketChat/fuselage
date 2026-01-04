import type { HTMLAttributes, ReactNode } from 'react';
import { forwardRef } from 'react';

import { MessageReactionCounter } from './MessageReactionCounter';
import { MessageReactionEmoji } from './MessageReactionEmoji';

type MessageReactionProps = {
  name?: string;
  counter?: number;
  mine?: boolean;
  children?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export const MessageReaction = forwardRef<HTMLDivElement, MessageReactionProps>(
  function Reaction(
    { name, counter, mine, children, className, onClick, onKeyDown, ...props },
    ref,
  ) {
    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        onClick?.(event as any);
      }
      onKeyDown?.(event);
    };

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
        aria-label={`${name || 'Reaction'}${counter ? `, ${counter} reactions` : ''}${mine ? ', you reacted' : ''}`}
        aria-pressed={mine}
        onClick={onClick}
        onKeyDown={handleKeyDown}
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
