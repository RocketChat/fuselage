import React, { FC } from 'react';

export const MessageReactionCounter: FC<{
  counter: number;
  className?: string;
}> = function ReactionCounter({ counter, className }) {
  return (
    <div className={`rcx-message-reactions__counter ${className}`}>
      {counter}
    </div>
  );
};
