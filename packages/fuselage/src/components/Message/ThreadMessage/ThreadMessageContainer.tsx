import type { ReactNode } from 'react';
import { styled } from 'tamagui';

import { RcxView } from '../../../primitives';

export type ThreadMessageContainerProps = {
  children?: ReactNode;
};

const ContainerFrame = styled(RcxView, {
  name: 'ThreadMessageContainer',
  display: 'flex',
  flexDirection: 'row',
  flexShrink: 1,
  width: '100%',
  margin: 4,
  overflow: 'hidden',
  // @ts-ignore
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

const ThreadMessageContainer = (props: ThreadMessageContainerProps) => (
  <ContainerFrame {...(props as any)} />
);

export default ThreadMessageContainer;
