import React from 'react';

import type { AvatarEmojiProps } from './Avatar';

export const AvatarEmoji = ({
  name,
  className,
  image,
  children,
}: AvatarEmojiProps) => (
  <span
    className={`${className || ''} ${name}`}
    style={image && image.length ? { backgroundImage: image } : undefined}
    children={children}
  />
);
