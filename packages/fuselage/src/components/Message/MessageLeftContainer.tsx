import type { HTMLAttributes } from 'react';
import { styled } from 'tamagui';

import { RcxView } from '../../primitives';

export type MessageLeftContainerProps = HTMLAttributes<HTMLDivElement>;

const MessageLeftContainerFrame = styled(RcxView, {
  name: 'MessageLeftContainer',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  flexGrow: 0,
  flexShrink: 0,
  width: 36,
  marginBlock: -2,
});

const MessageLeftContainer = (props: MessageLeftContainerProps) => (
  <MessageLeftContainerFrame {...(props as any)} />
);

export default MessageLeftContainer;
