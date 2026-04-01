import { styled } from '@tamagui/core';
import type { HTMLAttributes } from 'react';

import { RcxView } from '../../primitives';

export type MessageContainerProps = HTMLAttributes<HTMLDivElement>;

const MessageContainerFrame = styled(RcxView, {
  name: 'MessageContainer',
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  flexShrink: 1,
  minWidth: 1,
  gap: '$x2',
});

const MessageContainer = (props: MessageContainerProps) => (
  <MessageContainerFrame {...(props as any)} />
);

export default MessageContainer;
