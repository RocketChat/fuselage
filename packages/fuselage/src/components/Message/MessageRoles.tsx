import type { HTMLAttributes } from 'react';
import { styled } from 'tamagui';

import { RcxView } from '../../primitives';

export type MessageRolesProps = HTMLAttributes<HTMLDivElement>;

const MessageRolesFrame = styled(RcxView, {
  name: 'MessageRoles',
  display: 'flex',
  flexDirection: 'row',
  flexShrink: 1,
  overflow: 'hidden',
  // @ts-ignore
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

const MessageRoles = (props: MessageRolesProps) => (
  <MessageRolesFrame {...(props as any)} />
);

export default MessageRoles;
