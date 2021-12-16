import React, { FC } from 'react';

import './MessageSystem.styles.scss';

export const MessageSystem: FC = (props) => (
  <div className='rcx-box rcx-box--full rcx-message-system'>
    {props.children}
  </div>
);
