import type { HTMLAttributes } from 'react';
import { styled } from '@tamagui/core';

import { RcxView } from '../../primitives';

export type MessageContainerProps = HTMLAttributes<HTMLDivElement>;

const MessageContainerFrame = styled(RcxView, {
  name: 'MessageContainer',
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  flexShrink: 1,
  minWidth: 1,
  marginBlock: -2,
  marginInline: 4,
});

const MessageContainer = (props: MessageContainerProps) => (
  <MessageContainerFrame {...(props as any)} />
);

export default MessageContainer;
