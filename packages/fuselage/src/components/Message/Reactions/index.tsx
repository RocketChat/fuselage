import React, { ComponentProps, FC } from 'react';

import { ActionButton, ButtonGroup, Box, Icon } from '../../';
import { Message } from '../Message';
import './styles.scss';

export const Reactions: FC<ComponentProps<typeof ButtonGroup>> & {
  Reaction: FC<{ emoji: string; counter: number; className: string }>;
  Action: FC<{ className: string }>;
} = function Reactions(props) {
  return (
    <Message.Block className='rcx-message-reactions'>
      <ButtonGroup {...{ small: true }} {...props} />
    </Message.Block>
  );
};

const Reaction: FC<{
  emoji: string;
  counter: number;
  className: string;
}> = function Reaction({ emoji, counter, className }) {
  return (
    <div className={`rcx-message-reactions__reaction ${className}`}>
      <div className={`rcx-message-reactions__emoji ${emoji}`}></div>
      <div className='rcx-message-reactions__counter'>{counter}</div>
    </div>
  );
};

Reactions.Reaction = Reaction;

Reactions.Action = ({ className }) => {
  return (
    <div
      className={`rcx-message-reactions__reaction rcx-message-reactions__reaction--action ${className}`}
    >
      <Icon {...({ name: 'emoji-plus', size: 'x16' } as any)}></Icon>
    </div>
  );
};
