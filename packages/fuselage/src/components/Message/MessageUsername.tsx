import React, { AllHTMLAttributes, FC } from 'react';

export const MessageUsername: FC<AllHTMLAttributes<HTMLSpanElement>> =
  function MessageUsername(props) {
    return (
      <span
        className='rcx-box rcx-box--full rcx-message-header__username'
        {...props}
      />
    );
  };
