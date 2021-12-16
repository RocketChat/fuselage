import React, { FC } from 'react';

export const MessageTimestamp: FC<{ children: string }> =
  function MessageTimestamp(props) {
    return (
      <span
        className='rcx-box rcx-box--full rcx-message-header__time'
        {...props}
      />
    );
  };
