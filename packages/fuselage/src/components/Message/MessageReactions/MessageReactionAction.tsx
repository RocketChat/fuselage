import type { HTMLAttributes } from 'react';
import { styled } from '@tamagui/core';

import { RcxInteractive } from '../../../primitives';
import { Icon } from '../../Icon';

export type MessageReactionActionProps = HTMLAttributes<HTMLDivElement>;

const ReactionActionFrame = styled(RcxInteractive, {
  name: 'MessageReactionAction',
  display: 'inline-flex',
  flexDirection: 'row',
  alignItems: 'center',
  margin: 2,
  padding: 2,
  cursor: 'pointer',
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: '$strokeLight',
  borderRadius: '$x4',
  backgroundColor: '$surfaceTint',
  role: 'button',
  opacity: 0,
  '$group-message-hover': {
    display: 'inline-flex' as any,
    opacity: 1,
  },
});

export const MessageReactionAction = ({
  className: _className,
  ...props
}: MessageReactionActionProps) => (
  <ReactionActionFrame {...(props as any)}>
    <Icon name='emoji-plus' size='x16' />
  </ReactionActionFrame>
);
