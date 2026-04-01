import type { HTMLAttributes } from 'react';
import { styled } from '@tamagui/core';

import { RcxText } from '../../primitives';

export type MessageUsernameProps = HTMLAttributes<HTMLSpanElement>;

const MessageUsernameFrame = styled(RcxText, {
  name: 'MessageUsername',
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
  flexShrink: 1,
  color: '$fontDefault',
});

const MessageUsername = (props: MessageUsernameProps) => (
  <MessageUsernameFrame {...(props as any)} />
);

export default MessageUsername;
