import type { ComponentProps } from 'react';

import { MessageEmojiBase } from '../MessageEmojiBase';

export const MessageReactionEmoji = ({
  className,
  ...props
}: ComponentProps<typeof MessageEmojiBase>) => (
  <MessageEmojiBase
    className={`rcx-message-reactions__emoji ${className || ''}`}
    {...props}
  />
);
