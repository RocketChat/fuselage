import { Button, type ButtonProps } from '../../Button';

import { MessageMetricsItem } from './MessageMetricsItem';

export type MessageMetricsReplyProps = ButtonProps;

const MessageMetricsReply = (props: MessageMetricsReplyProps) => (
  <MessageMetricsItem>
    <Button variant='primary' {...props} size='small' />
  </MessageMetricsItem>
);

export default MessageMetricsReply;
