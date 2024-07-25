import React from 'react';

import { Button, type ButtonProps } from '../../Button';
import MessageMetricsItem from './MessageMetricsItem';

type MessageMetricsReplyProps = ButtonProps;

export const MessageMetricsReply = (props: MessageMetricsReplyProps) => (
  <MessageMetricsItem>
    <Button {...props} small primary />
  </MessageMetricsItem>
);
