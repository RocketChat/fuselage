import React from 'react';

type MessageReactionCounterProps = {
  counter: number;
  className?: string;
};

export const MessageReactionCounter = ({
  counter,
  className,
}: MessageReactionCounterProps) => (
  <div className={`rcx-message-reactions__counter ${className}`}>{counter}</div>
);
