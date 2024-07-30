import type { HTMLAttributes } from 'react';
import React from 'react';

import MessageMetricsContentItem from './MessageMetricsContentItem';
import MessageMetricsFollowing from './MessageMetricsFollowing';
import MessageMetricsItem from './MessageMetricsItem';
import MessageMetricsReply from './MessageMetricsReply';

/** @public */
export type MessageMetricsProps = HTMLAttributes<HTMLDivElement>;

/** @public */
function MessageMetrics(props: MessageMetricsProps) {
  return (
    <MessageMetricsContentItem>
      <div className='rcx-message-metrics__content-wrapper' {...props} />
    </MessageMetricsContentItem>
  );
}

/** @public */
// eslint-disable-next-line @typescript-eslint/no-namespace
namespace MessageMetrics {
  /** @deprecated use `MessageMetricsItem` instead */
  export const Reply = MessageMetricsReply;
  /** @deprecated use `MessageMetricsItem` instead */
  export const Item = MessageMetricsItem;
  /** @deprecated use `MessageMetricsFollowing` instead */
  export const Following = MessageMetricsFollowing;
}

export default MessageMetrics;
