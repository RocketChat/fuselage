import React from 'react';

type MessageReactionEmojiProps = {
  name: string;
  className?: string;
  image?: string;
};

export const MessageReactionEmoji = ({
  name,
  className,
  image,
}: MessageReactionEmojiProps) => (
  <div
    className={`rcx-message-reactions__emoji ${name} ${className}`}
    style={image && image.length ? { backgroundImage: image } : undefined}
  />
);
