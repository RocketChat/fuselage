import React, {
  ComponentProps,
  FC,
  forwardRef,
  HTMLAttributes,
  ReactNode,
} from 'react';

import { ButtonGroup, Icon } from '../..';
import { MessageBlock } from '../Message';
import './styles.scss';

export const MessageReactions: FC<ComponentProps<typeof ButtonGroup>> & {
  Reaction: typeof MessageReaction;
  Action: typeof MessageReactionAction;
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
    mine?: boolean;
    children?: ReactNode;
  } & HTMLAttributes<HTMLDivElement>
>(function Reaction(
  { name, counter, mine, children, className, ...props },
  ref
) {
  return (
    <div
      className={[
        `rcx-message-reactions__reaction`,
        mine && 'rcx-message-reactions__reaction--mine',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      ref={ref}
      {...props}
    >
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
  image?: string;
}> = function ReactionEmoji({ name, className, image }) {
  return (
    <div
      className={`rcx-message-reactions__emoji ${name} ${className}`}
      style={image && image.length ? { backgroundImage: image } : undefined}
    ></div>
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
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={[
      'rcx-message-reactions__reaction rcx-message-reactions__reaction--action',
      className,
    ]
      .filter(Boolean)
      .join(' ')}
    {...props}
  >
    <Icon {...({ name: 'emoji-plus', size: 'x16' } as any)}></Icon>
  </div>
);

// TODO: remove nested components

MessageReactions.Reaction = MessageReaction;
MessageReactions.Action = MessageReactionAction;
