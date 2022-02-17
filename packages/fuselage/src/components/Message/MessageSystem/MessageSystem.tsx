import type { ReactNode } from 'react';
import React from 'react';

import './MessageSystem.styles.scss';

type MessageSystemProps = {
  children?: ReactNode;
};

export const MessageSystem = (props: MessageSystemProps) => (
  <div className='rcx-box rcx-box--full rcx-message-system'>
    {props.children}
  </div>
);
