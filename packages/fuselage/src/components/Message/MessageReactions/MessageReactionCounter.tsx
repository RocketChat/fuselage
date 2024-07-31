/** @public */
export type MessageReactionCounterProps = {
  counter: number;
  className?: string;
};

/** @public */
const MessageReactionCounter = ({
  counter,
  className,
}: MessageReactionCounterProps) => (
  <div className={`rcx-message-reactions__counter ${className}`}>{counter}</div>
);

export default MessageReactionCounter;
