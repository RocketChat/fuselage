import type { HTMLAttributes } from 'react';

import MessageMetricsContentItem from './MessageMetricsContentItem';
import MessageMetricsFollowing from './MessageMetricsFollowing';
import { MessageMetricsItem } from './MessageMetricsItem';
import MessageMetricsReply from './MessageMetricsReply';

export type MessageMetricsProps = HTMLAttributes<HTMLDivElement>;

const MessageMetrics = Object.assign(
  (props: MessageMetricsProps) => (
    <MessageMetricsContentItem>
      <div 
        className='rcx-message-metrics__content-wrapper'
        role='group'
        aria-label='Message metrics'
        {...props} 
      />
    </MessageMetricsContentItem>
  ),
  {
    /** @deprecated prefer using named imports */
    Reply: MessageMetricsReply,
    /** @deprecated prefer using named imports */
    Item: MessageMetricsItem,
    /** @deprecated prefer using named imports */
    Following: MessageMetricsFollowing,
  },
);

export default MessageMetrics;
