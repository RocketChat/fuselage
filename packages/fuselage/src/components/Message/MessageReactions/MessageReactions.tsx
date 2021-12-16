import React, { ComponentProps, FC } from 'react';

import { ButtonGroup } from '../..';
import { MessageBlock } from '../MessageBlock';

export const MessageReactions: FC<ComponentProps<typeof ButtonGroup>> =
  function Reactions(props) {
    return (
      <MessageBlock className='rcx-message-reactions'>
        <ButtonGroup {...{ small: true }} {...props} />
      </MessageBlock>
    );
  };
