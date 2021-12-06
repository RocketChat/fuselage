import React, { ComponentProps, FC, forwardRef } from 'react';

import { ButtonGroup, Icon } from '../..';
import { MessageBlock } from '../Message';
import './styles.scss';

export const MessageReactions: FC<ComponentProps<typeof ButtonGroup>> & {
  Reaction: FC<{ emoji?: string; counter?: number; className?: string }>;
  Action: FC<{ className?: string }>;
} = function Reactions(props) {
  return (
    <MessageBlock className='rcx-message-reactions'>
      <ButtonGroup {...{ small: true }} {...props} />
    </MessageBlock>
  );
};

export const MessageReaction = forwardRef<
  HTMLDivElement,
  {
    name?: string;
    counter?: number;
    className?: string;
  }
>(function Reaction({ name, counter, className, children }, ref) {
  return (
    <div className={`rcx-message-reactions__reaction ${className}`} ref={ref}>
      {children || (
        <>
          {name && <MessageReactionEmoji name={name} />}
          {counter && <MessageReactionCounter counter={counter} />}
        </>
      )}
    </div>
  );
});

export const MessageReactionEmoji: FC<{
  name: string;
  className?: string;
}> = function ReactionEmoji({ name, className }) {
  return (
    <div className={`rcx-message-reactions__emoji ${name} ${className}`}></div>
  );
};

export const MessageReactionCounter: FC<{
  counter: number;
  className?: string;
}> = function ReactionCounter({ counter, className }) {
  return (
    <div className={`rcx-message-reactions__counter ${className}`}>
      {counter}
    </div>
  );
};

export const MessageReactionAction = ({
  className,
}: {
  className?: string;
}) => (
  <div
    className={`rcx-message-reactions__reaction rcx-message-reactions__reaction--action ${className}`}
  >
    <Icon {...({ name: 'emoji-plus', size: 'x16' } as any)}></Icon>
  </div>
);

// TODO: remove nested components

MessageReactions.Reaction = MessageReaction;
MessageReactions.Action = MessageReactionAction;
