import type { HTMLAttributes, ReactNode } from 'react';
import { forwardRef } from 'react';
import { styled } from '@tamagui/core';

import { RcxInteractive } from '../../../primitives';

import { MessageReactionCounter } from './MessageReactionCounter';
import { MessageReactionEmoji } from './MessageReactionEmoji';

export type MessageReactionProps = {
  name?: string;
  counter?: number;
  mine?: boolean;
  children?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const ReactionFrame = styled(RcxInteractive, {
  name: 'MessageReaction',
  display: 'inline-flex',
  flexDirection: 'row',
  alignItems: 'center',
  margin: 2,
  padding: 2,
  cursor: 'pointer',
  color: '$fontHint',
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: '$strokeLight',
  borderRadius: '$x4',
  backgroundColor: '$surfaceTint',
  role: 'button',
  hoverStyle: {
    borderColor: '$strokeDark',
    backgroundColor: '$surfaceHover',
  },
  focusVisibleStyle: {
    borderColor: '$strokeExtraDark',
    boxShadow: '0 0 0 2px var(--shadowHighlight)',
  },
  variants: {
    mine: {
      true: {
        color: '$fontDefault',
        borderColor: '$strokeDark',
        backgroundColor: '$surfaceSelected',
      },
    },
  } as const,
});

export const MessageReaction = forwardRef<HTMLDivElement, MessageReactionProps>(
  function Reaction(
    { name, counter, mine, children, className: _className, ...props },
    ref,
  ) {
    return (
      <ReactionFrame mine={mine || undefined} ref={ref} {...(props as any)}>
        {children || (
          <>
            {name && <MessageReactionEmoji name={name} />}
            {counter && <MessageReactionCounter counter={counter} />}
          </>
        )}
      </ReactionFrame>
    );
  },
);
