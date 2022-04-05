import type { ComponentProps } from 'react';
import React from 'react';

import { ButtonGroup } from '../..';
import { MessageBlock } from '../MessageBlock';

type MessageReactionsProps = ComponentProps<typeof ButtonGroup>;

export const MessageReactions = (props: MessageReactionsProps) => (
  <MessageBlock className='rcx-message-reactions'>
    <ButtonGroup {...{ small: true }} {...props} />
  </MessageBlock>
);
