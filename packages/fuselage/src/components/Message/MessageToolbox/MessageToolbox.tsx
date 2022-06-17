import type { ComponentProps } from 'react';
import React from 'react';

import { ButtonGroup } from '../..';

type MessageToolboxProps = ComponentProps<typeof ButtonGroup>;

export const MessageToolbox = (props: MessageToolboxProps) => (
  <div className='rcx-box rcx-box--full rcx-message-toolbox'>
    <ButtonGroup small {...props} />
  </div>
);
