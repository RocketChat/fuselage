import { styled } from '@tamagui/core';
import type { HTMLAttributes } from 'react';

import { RcxView } from '../../primitives';

export type MessageRolesProps = HTMLAttributes<HTMLDivElement>;

const MessageRolesFrame = styled(RcxView, {
  name: 'MessageRoles',
  display: 'flex',
  flexDirection: 'row',
  flexShrink: 1,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  gap: '$x4',
});

const MessageRoles = (props: MessageRolesProps) => (
  <MessageRolesFrame {...(props as any)} />
);

export default MessageRoles;
