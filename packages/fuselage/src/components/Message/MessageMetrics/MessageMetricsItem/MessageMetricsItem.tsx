import type { HTMLAttributes } from 'react';
import React from 'react';

type MessageMetricsItemProps = HTMLAttributes<HTMLDivElement>;

export const MessageMetricsItem = (props: MessageMetricsItemProps) => (
  <div className='rcx-message-metrics__item' {...props} />
);
