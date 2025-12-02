import { Button } from '../..';
import type { ButtonProps } from '../../Button/Button';

import MessageMetricsItem from './MessageMetricsItem';

type MessageMetricsReplyProps = ButtonProps;

export const MessageMetricsReply = (props: MessageMetricsReplyProps) => (
  <MessageMetricsItem>
    <Button primary {...props} small />
  </MessageMetricsItem>
);
