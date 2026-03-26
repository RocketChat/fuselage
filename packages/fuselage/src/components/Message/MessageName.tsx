import type { HTMLAttributes } from 'react';
import { styled } from 'tamagui';

import { RcxText } from '../../primitives';

export type MessageNameProps = HTMLAttributes<HTMLSpanElement>;

const MessageNameFrame = styled(RcxText, {
  name: 'MessageName',
  fontFamily: '$body',
  fontSize: '$h5',
  fontWeight: '$h5',
  lineHeight: '$h5',
  letterSpacing: '$h5',
  overflow: 'hidden',
  // @ts-ignore
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflowWrap: 'normal',
  flexShrink: 1,
  color: '$fontDefault',
});

const MessageName = (props: MessageNameProps) => (
  <MessageNameFrame {...(props as any)} />
);

export default MessageName;
