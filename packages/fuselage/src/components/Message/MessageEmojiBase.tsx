import type { ReactNode } from 'react';
import React from 'react';

type MessageEmojiBaseProps = {
  name: string;
  className?: string;
  children?: ReactNode;
  image?: string;
};

export const MessageEmojiBase = ({
  name,
  className,
  image,
  children,
}: MessageEmojiBaseProps) => (
  <div
    className={`${className || ''} ${name}`}
    style={image && image.length ? { backgroundImage: image } : undefined}
    children={children}
  />
);
