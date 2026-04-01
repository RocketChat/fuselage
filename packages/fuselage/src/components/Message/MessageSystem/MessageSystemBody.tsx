import type { HTMLAttributes } from 'react';
import { styled } from '@tamagui/core';

import { RcxText } from '../../../primitives';

export type MessageSystemBodyProps = HTMLAttributes<HTMLDivElement>;

const SystemBodyFrame = styled(RcxText, {
  name: 'MessageSystemBody',
  fontFamily: '$body',
  fontSize: '$p2',
  fontWeight: '$p2',
  lineHeight: '$p2',
  letterSpacing: '$p2',
  overflow: 'hidden',
  // @ts-ignore
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflowWrap: 'normal',
  marginInline: 2,
});

const MessageSystemBody = (props: MessageSystemBodyProps) => (
  <SystemBodyFrame {...(props as any)} />
);

export default MessageSystemBody;
