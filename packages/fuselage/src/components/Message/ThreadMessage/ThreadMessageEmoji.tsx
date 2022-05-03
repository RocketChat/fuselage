import type { ReactNode } from 'react';
import React from 'react';

import { MessageEmojiBase } from '../MessageEmojiBase';

type ThreadMessageEmojiProps = {
  name: string;
  className?: string;
  image?: string;
  children?: ReactNode;
};

export const ThreadMessageEmoji = ({
  name,
  className,
  image,
  children,
}: ThreadMessageEmojiProps) => (
  <MessageEmojiBase
    className={`rcx-message-thread__emoji ${className || ''}`}
    name={name}
    image={image}
    children={children}
  />
);
