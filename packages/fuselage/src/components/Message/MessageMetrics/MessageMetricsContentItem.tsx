import type { HTMLAttributes } from 'react';
import React from 'react';

/** @public */
export type MessageMetricsContentItemProps = HTMLAttributes<HTMLDivElement>;

/** @public */
const MessageMetricsContentItem = (props: MessageMetricsContentItemProps) => (
  <div className='rcx-message-metrics__content-item' {...props} />
);

export default MessageMetricsContentItem;
