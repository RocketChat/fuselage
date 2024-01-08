import type { ComponentProps } from 'react';
import React from 'react';

import MessageMetricsItem from './MessageMetricsItem';
import { Button } from '../..';

type MessageMetricsReplyProps = ComponentProps<typeof Button>;

export const MessageMetricsReply = (props: MessageMetricsReplyProps) => (
  <MessageMetricsItem>
    <Button {...props} small primary />
  </MessageMetricsItem>
);
