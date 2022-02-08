import React, { ReactNode } from 'react';

type MessageHeaderProps = {
  children?: ReactNode;
};

export const MessageHeader = ({ children }: MessageHeaderProps) => (
  <div className='rcx-box rcx-box--full rcx-message-header'>
    <div className='rcx-box rcx-box--full rcx-message-header__wrapper'>
      {children}
    </div>
  </div>
);
