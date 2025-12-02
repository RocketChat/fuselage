import type { MessageEmojiBaseProps } from '../MessageEmojiBase';
import { MessageEmojiBase } from '../MessageEmojiBase';

export const MessageReactionEmoji = ({
  className,
  ...props
}: MessageEmojiBaseProps) => (
  <MessageEmojiBase
    className={`rcx-message-reactions__emoji ${className || ''}`}
    {...props}
  />
);
