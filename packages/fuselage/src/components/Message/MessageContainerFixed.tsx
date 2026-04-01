import type { HTMLAttributes } from 'react';
import { styled } from '@tamagui/core';

import { RcxView } from '../../primitives';

export type MessageContainerFixedProps = HTMLAttributes<HTMLDivElement>;

const MessageContainerFixedFrame = styled(RcxView, {
  name: 'MessageContainerFixed',
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 0,
  flexShrink: 0,
  alignItems: 'center',
  minWidth: 1,
  marginBlock: -2,
  marginInline: 4,
});

const MessageContainerFixed = (props: MessageContainerFixedProps) => (
  <MessageContainerFixedFrame {...(props as any)} />
);

export default MessageContainerFixed;
