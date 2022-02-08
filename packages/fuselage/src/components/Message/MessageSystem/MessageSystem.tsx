import React, { ReactNode } from 'react';

import './MessageSystem.styles.scss';

type MessageSystemProps = {
  children?: ReactNode;
};

export const MessageSystem = (props: MessageSystemProps) => (
  <div className='rcx-box rcx-box--full rcx-message-system'>
    {props.children}
  </div>
);
