import type { HTMLAttributes } from 'react';
import { styled } from 'tamagui';

import { RcxView } from '../../../primitives';

import MessageMetricsContentItem from './MessageMetricsContentItem';
import MessageMetricsFollowing from './MessageMetricsFollowing';
import { MessageMetricsItem } from './MessageMetricsItem';
import MessageMetricsReply from './MessageMetricsReply';

export type MessageMetricsProps = HTMLAttributes<HTMLDivElement>;

const MetricsContentWrapper = styled(RcxView, {
  name: 'MessageMetricsContentWrapper',
  display: 'flex',
  flexDirection: 'row',
  marginInline: -4,
});

const MessageMetrics = Object.assign(
  (props: MessageMetricsProps) => (
    <MessageMetricsContentItem>
      <MetricsContentWrapper {...(props as any)} />
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
