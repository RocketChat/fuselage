import type { ComponentProps } from 'react';

import { Button } from '../..';
import MessageMetricsItem from './MessageMetricsItem';

type MessageMetricsReplyProps = ComponentProps<typeof Button>;

export const MessageMetricsReply = (props: MessageMetricsReplyProps) => (
  <MessageMetricsItem>
    <Button primary {...props} small />
  </MessageMetricsItem>
);
