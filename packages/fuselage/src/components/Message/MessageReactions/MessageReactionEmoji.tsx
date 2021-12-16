import React, { FC } from 'react';

export const MessageReactionEmoji: FC<{
  name: string;
  className?: string;
  image?: string;
}> = function ReactionEmoji({ name, className, image }) {
  return (
    <div
      className={`rcx-message-reactions__emoji ${name} ${className}`}
      style={image && image.length ? { backgroundImage: image } : undefined}
    ></div>
  );
};
