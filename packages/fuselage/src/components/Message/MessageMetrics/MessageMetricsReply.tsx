import type { ComponentProps } from 'react';

import { Button } from '../../index.js';

import MessageMetricsItem from './MessageMetricsItem/index.js';

type MessageMetricsReplyProps = ComponentProps<typeof Button>;

export const MessageMetricsReply = (props: MessageMetricsReplyProps) => (
  <MessageMetricsItem>
    <Button primary {...props} small />
  </MessageMetricsItem>
);
