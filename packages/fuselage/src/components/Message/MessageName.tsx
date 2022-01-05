import React, { AllHTMLAttributes, FC } from 'react';

export const MessageName: FC<AllHTMLAttributes<HTMLSpanElement>> =
  function MessageName(props) {
    return (
      <span
        className='rcx-box rcx-box--full rcx-message-header__name'
        {...props}
      />
    );
  };
