import type { ReactNode } from 'react';
import React from 'react';

import { MessageEmojiBase } from '../MessageEmojiBase';

type MessageReactionEmojiProps = {
  name: string;
  className?: string;
  children?: ReactNode;
  image?: string;
};

export const MessageReactionEmoji = ({
  name,
  className,
  image,
  children,
}: MessageReactionEmojiProps) => (
  <MessageEmojiBase
    className={`rcx-message-reactions__emoji ${className || ''}`}
    name={name}
    image={image}
    children={children}
  />
);
