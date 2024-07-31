import type { HTMLAttributes } from 'react';

/** @public */
export type MessageMetricsItemLabelProps = HTMLAttributes<HTMLDivElement>;

/** @public */
const MessageMetricsItemLabel = (props: MessageMetricsItemLabelProps) => (
  <div className='rcx-message-metrics__item-label' {...props} />
);

export default MessageMetricsItemLabel;
