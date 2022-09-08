import type { ReactNode } from 'react';
import React from 'react';

import { MessageBlock } from '../MessageBlock';

type MessageReactionsProps = { children: ReactNode };

export const MessageReactions = (props: MessageReactionsProps) => (
  <MessageBlock className='rcx-message-reactions'>
    <div className='rcx-message-reactions__container' {...props} />
  </MessageBlock>
);
