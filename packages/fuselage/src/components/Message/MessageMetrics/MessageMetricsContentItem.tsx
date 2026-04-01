import type { HTMLAttributes } from 'react';
import { styled } from '@tamagui/core';

import { RcxView } from '../../../primitives';

export type MessageMetricsContentItemProps = HTMLAttributes<HTMLDivElement>;

const MetricsContentItemFrame = styled(RcxView, {
  name: 'MessageMetricsContentItem',
  display: 'flex',
  flexDirection: 'row',
  marginBlock: 4,
});

const MessageMetricsContentItem = (props: MessageMetricsContentItemProps) => (
  <MetricsContentItemFrame {...(props as any)} />
);

export default MessageMetricsContentItem;
