import type { HTMLAttributes } from 'react';
import { styled } from 'tamagui';

import { RcxView } from '../../primitives';

export type MessageHeaderProps = HTMLAttributes<HTMLDivElement>;

const MessageHeaderFrame = styled(RcxView, {
  name: 'MessageHeader',
  display: 'flex',
  flexDirection: 'row',
  flexGrow: 0,
  flexShrink: 1,
  minWidth: 1,
  marginBlock: 2,
});

const MessageHeaderWrapper = styled(RcxView, {
  name: 'MessageHeaderWrapper',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  flexGrow: 1,
  flexShrink: 1,
  minWidth: 1,
  marginBlock: -4,
  marginInline: -2,
});

const MessageHeader = ({ children, ...props }: MessageHeaderProps) => (
  <MessageHeaderFrame {...(props as any)}>
    <MessageHeaderWrapper>{children}</MessageHeaderWrapper>
  </MessageHeaderFrame>
);

export default MessageHeader;
