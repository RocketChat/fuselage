import type { HTMLAttributes } from 'react';

type MessageEmojiBaseProps = {
  name: string;
  image?: string;
} & HTMLAttributes<HTMLSpanElement>;

export const MessageEmojiBase = ({
  name,
  image,
  className,
  ...props
}: MessageEmojiBaseProps) => (
  <span
    className={`${className || ''} ${name}`}
    style={image && image.length ? { backgroundImage: image } : undefined}
    {...props}
  />
);
