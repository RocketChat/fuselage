import { styled } from '@tamagui/core';
import type { HTMLAttributes } from 'react';

import { RcxView } from '../../primitives';

export type MessageLeftContainerProps = HTMLAttributes<HTMLDivElement>;

const MessageLeftContainerFrame = styled(RcxView, {
  name: 'MessageLeftContainer',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  flexGrow: 0,
  flexShrink: 0,
  width: '$x36',
  marginBlock: -2,
  marginInline: '$x4',
});

const MessageLeftContainer = (props: MessageLeftContainerProps) => (
  <MessageLeftContainerFrame {...(props as any)} />
);

export default MessageLeftContainer;
