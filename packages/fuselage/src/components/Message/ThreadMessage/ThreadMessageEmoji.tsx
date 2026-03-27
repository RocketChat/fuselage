import type { MessageEmojiBaseProps } from '../MessageEmojiBase';
import MessageEmojiBase from '../MessageEmojiBase';

export type ThreadMessageEmojiProps = MessageEmojiBaseProps;

const ThreadMessageEmoji = ({
  className,
  ...props
}: ThreadMessageEmojiProps) => (
  <MessageEmojiBase
    className={className}
    style={{
      display: 'inline-block',
      marginInline: 2,
      backgroundSize: 'contain',
      width: 12,
      height: 12,
    }}
    {...props}
  />
);

export default ThreadMessageEmoji;
