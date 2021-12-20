import React, { FC, HTMLAttributes } from 'react';

import { MessageMetricsContentItem } from './MessageMetricsContentItem';

export const MessageMetrics: FC<HTMLAttributes<HTMLDivElement>> = (props) => (
  <MessageMetricsContentItem>
    <div className='rcx-message-metrics__content-wrapper' {...props} />
  </MessageMetricsContentItem>
);
