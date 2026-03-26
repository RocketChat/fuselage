import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';
import { styled } from 'tamagui';

import { RcxView } from '../../../primitives';
import MessageBlock from '../MessageBlock';

export type MessageReactionsProps = HTMLAttributes<HTMLDivElement>;

const ReactionsContainer = styled(RcxView, {
  name: 'MessageReactionsContainer',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  margin: -2,
});

const MessageReactions = forwardRef<HTMLDivElement, MessageReactionsProps>(
  function MessageReactions(props, ref) {
    return (
      <MessageBlock>
        <ReactionsContainer ref={ref} {...(props as any)} />
      </MessageBlock>
    );
  },
);

export default MessageReactions;
