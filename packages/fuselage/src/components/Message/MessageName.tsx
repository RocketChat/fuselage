import React, { AllHTMLAttributes } from 'react';

type MessageNameProps = AllHTMLAttributes<HTMLSpanElement>;

export const MessageName = (props: MessageNameProps) => (
  <span className='rcx-box rcx-box--full rcx-message-header__name' {...props} />
);
