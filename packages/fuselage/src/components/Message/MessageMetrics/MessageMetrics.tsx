import type { HTMLAttributes } from 'react';
import React from 'react';

import { MessageMetricsContentItem } from './MessageMetricsContentItem';

type MessageMetricsProps = HTMLAttributes<HTMLDivElement>;

export const MessageMetrics = (props: MessageMetricsProps) => (
  <MessageMetricsContentItem>
    <div className='rcx-message-metrics__content-wrapper' {...props} />
  </MessageMetricsContentItem>
);
