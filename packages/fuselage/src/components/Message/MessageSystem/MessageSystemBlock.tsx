import type { ReactNode } from 'react';
import { styled } from 'tamagui';

import { RcxView } from '../../../primitives';

export type MessageSystemBlockProps = {
  children?: ReactNode;
};

const SystemBlockFrame = styled(RcxView, {
  name: 'MessageSystemBlock',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

const MessageSystemBlock = (props: MessageSystemBlockProps) => (
  <SystemBlockFrame {...(props as any)} />
);

export default MessageSystemBlock;
