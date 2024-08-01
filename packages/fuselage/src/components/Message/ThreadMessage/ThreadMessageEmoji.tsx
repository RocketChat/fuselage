import type { ComponentProps } from 'react';

import { MessageEmojiBase } from '../MessageEmojiBase';

export const ThreadMessageEmoji = ({
  className,
  ...props
}: ComponentProps<typeof MessageEmojiBase>) => (
  <MessageEmojiBase
    className={`rcx-message-thread__emoji ${className || ''}`}
    {...props}
  />
);
