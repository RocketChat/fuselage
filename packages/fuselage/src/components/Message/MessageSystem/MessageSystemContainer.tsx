import type { ReactNode } from 'react';
import { styled } from '@tamagui/core';

import { RcxView } from '../../../primitives';

export type MessageSystemContainerProps = {
  children?: ReactNode;
};

const SystemContainerFrame = styled(RcxView, {
  name: 'MessageSystemContainer',
  display: 'flex',
  flexDirection: 'column',
  flexShrink: 1,
  alignSelf: 'center',
  width: '100%',
  marginBlock: -4,
  overflow: 'hidden',
  // @ts-ignore
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

const MessageSystemContainer = (props: MessageSystemContainerProps) => (
  <SystemContainerFrame {...(props as any)} />
);

export default MessageSystemContainer;
