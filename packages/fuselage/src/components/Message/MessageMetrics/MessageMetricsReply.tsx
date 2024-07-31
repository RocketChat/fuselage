import { Button, type ButtonProps } from '../../Button';
import MessageMetricsItem from './MessageMetricsItem';

/** @public */
export type MessageMetricsReplyProps = ButtonProps;

/** @public */
const MessageMetricsReply = (props: MessageMetricsReplyProps) => (
  <MessageMetricsItem>
    <Button {...props} small primary />
  </MessageMetricsItem>
);

export default MessageMetricsReply;
