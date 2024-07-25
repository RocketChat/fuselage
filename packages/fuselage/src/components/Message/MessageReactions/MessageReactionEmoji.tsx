import React from 'react';

import type { MessageEmojiBaseProps } from '../MessageEmojiBase';
import { MessageEmojiBase } from '../MessageEmojiBase';

type MessageReactionEmojiProps = MessageEmojiBaseProps;

export const MessageReactionEmoji = ({
  className,
  ...props
}: MessageReactionEmojiProps) => (
  <MessageEmojiBase
    className={`rcx-message-reactions__emoji ${className || ''}`}
    {...props}
  />
);
