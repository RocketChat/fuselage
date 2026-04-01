import type { HTMLAttributes } from 'react';
import { styled } from '@tamagui/core';

import { RcxText } from '../../primitives';

export type MessageTimestampProps = HTMLAttributes<HTMLSpanElement>;

const MessageTimestampFrame = styled(RcxText, {
  name: 'MessageTimestamp',
  fontFamily: '$body',
  fontSize: '$c1',
  fontWeight: '$c1',
  lineHeight: '$c1',
  letterSpacing: '$c1',
  overflow: 'hidden',
  // @ts-ignore
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflowWrap: 'normal',
  flexShrink: 0,
  color: '$fontDefault',
  marginInline: 2,
});

const MessageTimestamp = (props: MessageTimestampProps) => (
  <MessageTimestampFrame {...(props as any)} />
);

export default MessageTimestamp;
