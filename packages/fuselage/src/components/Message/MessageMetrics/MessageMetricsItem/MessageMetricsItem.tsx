import type { HTMLAttributes } from 'react';
import React from 'react';

import MessageMetricsItemIcon from './MessageMetricsItemIcon';
import MessageMetricsItemLabel from './MessageMetricsItemLabel';

/** @public */
export type MessageMetricsItemProps = HTMLAttributes<HTMLDivElement>;

/** @public */
function MessageMetricsItem(props: MessageMetricsItemProps) {
  return <div className='rcx-message-metrics__item' {...props} />;
}

/** @public */
// eslint-disable-next-line @typescript-eslint/no-namespace
namespace MessageMetricsItem {
  /** @deprecated use `MessageMetricsItemIcon` instead */
  export const Icon = MessageMetricsItemIcon;
  /** @deprecated use `MessageMetricsItemLabel` instead */
  export const Label = MessageMetricsItemLabel;
}

export default MessageMetricsItem;
