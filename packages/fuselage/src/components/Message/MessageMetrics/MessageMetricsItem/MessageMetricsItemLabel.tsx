import type { HTMLAttributes } from 'react';
import { styled } from '@tamagui/core';

import { RcxText } from '../../../../primitives';

export type MessageMetricsItemLabelProps = HTMLAttributes<HTMLDivElement>;

const MetricsItemLabelFrame = styled(RcxText, {
  name: 'MessageMetricsItemLabel',
  fontFamily: '$body',
  fontSize: '$micro',
  fontWeight: '$micro',
  lineHeight: '$micro',
  letterSpacing: '$micro',
  marginInlineStart: 4,
  overflowWrap: 'normal',
});

const MessageMetricsItemLabel = (props: MessageMetricsItemLabelProps) => (
  <MetricsItemLabelFrame {...(props as any)} />
);

export default MessageMetricsItemLabel;
