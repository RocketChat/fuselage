import type { ReactNode } from 'react';
import { styled } from '@tamagui/core';

import { RcxText } from '../../../primitives';

export type MessageSystemTimestampProps = {
  children: ReactNode;
  title?: string;
};

const SystemTimestampFrame = styled(RcxText, {
  name: 'MessageSystemTimestamp',
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
  marginInline: 2,
});

const MessageSystemTimestamp = (props: MessageSystemTimestampProps) => (
  <SystemTimestampFrame {...(props as any)} />
);

export default MessageSystemTimestamp;
