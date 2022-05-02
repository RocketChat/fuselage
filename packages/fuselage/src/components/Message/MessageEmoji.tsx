import type { ReactNode } from 'react';
import React from 'react';

import { MessageEmojiBase } from './MessageEmojiBase';

type MessageEmojiProps = {
  name: string;
  className?: string;
  image?: string;
  big?: boolean;
  children?: ReactNode;
};

export const MessageEmoji = ({
  name,
  className,
  image,
  big,
  children,
}: MessageEmojiProps) => (
  <MessageEmojiBase
    className={[
      'rcx-message__emoji',
      className,
      big && 'rcx-message__emoji--big',
    ]
      .filter(Boolean)
      .join(' ')}
    name={name}
    image={image}
    children={children}
  />
);
