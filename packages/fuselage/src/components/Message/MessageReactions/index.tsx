import React, { ComponentProps, FC } from 'react';

import { ButtonGroup, Icon } from '../..';
import { MessageBlock } from '../Message';
import './styles.scss';

export const MessageReactions: FC<ComponentProps<typeof ButtonGroup>> & {
  Reaction: FC<{ emoji?: string; counter: number; className?: string }>;
  Action: FC<{ className?: string }>;
} = function Reactions(props) {
  return (
    <MessageBlock className='rcx-message-reactions'>
      <ButtonGroup {...{ small: true }} {...props} />
    </MessageBlock>
  );
};

const Reaction: FC<{
  emoji?: string;
  counter: number;
  className?: string;
}> = function Reaction({ emoji, counter, className }) {
  return (
    <div className={`rcx-message-reactions__reaction ${className}`}>
      <div className={`rcx-message-reactions__emoji ${emoji}`}></div>
      <div className='rcx-message-reactions__counter'>{counter}</div>
    </div>
  );
};

MessageReactions.Reaction = Reaction;

MessageReactions.Action = ({ className }) => (
  <div
    className={`rcx-message-reactions__reaction rcx-message-reactions__reaction--action ${className}`}
  >
    <Icon {...({ name: 'emoji-plus', size: 'x16' } as any)}></Icon>
  </div>
);
