import type { MessageEmojiBaseProps } from '../MessageEmojiBase';
import { MessageEmojiBase } from '../MessageEmojiBase';

type ThreadMessageEmojiProps = MessageEmojiBaseProps;

export const ThreadMessageEmoji = ({
  className,
  ...props
}: ThreadMessageEmojiProps) => (
  <MessageEmojiBase
    className={`rcx-message-thread__emoji ${className || ''}`}
    {...props}
  />
);
