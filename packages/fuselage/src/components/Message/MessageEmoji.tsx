import type { ComponentProps } from 'react';

import { MessageEmojiBase } from './MessageEmojiBase';

type MessageEmojiProps = ComponentProps<typeof MessageEmojiBase> & {
  big?: boolean;
};

export const MessageEmoji = ({
  name,
  className,
  image,
  big,
  ...props
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
    {...props}
  />
);
