import type { MessageEmojiBaseProps } from '../MessageEmojiBase';
import { MessageEmojiBase } from '../MessageEmojiBase';

/** @public */
export type MessageReactionEmojiProps = MessageEmojiBaseProps;

/** @public */
const MessageReactionEmoji = ({
  className,
  ...props
}: MessageReactionEmojiProps) => (
  <MessageEmojiBase
    className={`rcx-message-reactions__emoji ${className || ''}`}
    {...props}
  />
);

export default MessageReactionEmoji;
