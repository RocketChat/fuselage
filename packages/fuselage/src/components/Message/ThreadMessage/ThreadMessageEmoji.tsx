import type { MessageEmojiBaseProps } from '../MessageEmojiBase';
import { MessageEmojiBase } from '../MessageEmojiBase';

export const ThreadMessageEmoji = ({
  className,
  ...props
}: MessageEmojiBaseProps) => (
  <MessageEmojiBase
    className={`rcx-message-thread__emoji ${className || ''}`}
    {...props}
  />
);
