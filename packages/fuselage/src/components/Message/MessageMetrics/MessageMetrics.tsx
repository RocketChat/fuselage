import React, { FC } from 'react';

import { MessageMetricsContentItem } from './MessageMetricsContentItem';

export const MessageMetrics: FC = (props) => (
  <MessageMetricsContentItem>
    <div className='rcx-message-metrics__content-wrapper' {...props} />
  </MessageMetricsContentItem>
);
