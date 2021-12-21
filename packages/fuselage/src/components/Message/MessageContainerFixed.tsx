import React, { FC } from 'react';

export const MessageContainerFixed: FC = function MessageContainerFixed(props) {
  return (
    <div
      className='rcx-box rcx-box--full rcx-message-container rcx-message-container--fixed'
      {...props}
    />
  );
};
