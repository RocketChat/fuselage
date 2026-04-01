import type { MessageEmojiBaseProps } from '../MessageEmojiBase';
import MessageEmojiBase from '../MessageEmojiBase';

export type MessageReactionEmojiProps = MessageEmojiBaseProps;

export const MessageReactionEmoji = ({
  className,
  ...props
}: MessageReactionEmojiProps) => (
  <MessageEmojiBase
    className={className}
    style={{ display: 'block', width: 16, height: 16 }}
    {...props}
  />
);
