import type { ReactNode } from 'react';
import React from 'react';

import { prependClassName } from '../../helpers/prependClassName';

type MessageEmojiProps = {
  name: string;
  className?: string;
  children?: ReactNode;
  image?: string;
  isBig?: boolean;
};

export const MessageEmoji = ({
  name,
  className,
  image,
  isBig,
  ...props
}: MessageEmojiProps) => (
  <span
    className={prependClassName(
      className,
      [
        className && 'rcx-message-emoji',
        isBig && className && 'rcx-message-emoji--big',
        name,
      ]
        .filter(Boolean)
        .join(' ')
    )}
    style={image && image.length ? { backgroundImage: image } : undefined}
    {...props}
  />
);
