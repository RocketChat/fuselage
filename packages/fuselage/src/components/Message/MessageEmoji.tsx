import type { MessageEmojiBaseProps } from './MessageEmojiBase';
import MessageEmojiBase from './MessageEmojiBase';

export type MessageEmojiProps = MessageEmojiBaseProps & {
  big?: boolean;
};

const MessageEmoji = ({
  name,
  className,
  image,
  big,
  ...props
}: MessageEmojiProps) => (
  <MessageEmojiBase
    className={className}
    name={name}
    image={image}
    style={{
      display: 'inline-block',
      marginInline: 2,
      backgroundSize: 'contain',
      width: big ? 44 : 24,
      height: big ? 44 : 24,
    }}
    {...props}
  />
);

export default MessageEmoji;
