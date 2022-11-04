import type { AllHTMLAttributes } from 'react';
import React from 'react';

type MessageNameContainerProps = AllHTMLAttributes<HTMLSpanElement>;

export const MessageNameContainer = (props: MessageNameContainerProps) => (
  <span
    className='rcx-box rcx-box--full rcx-message-header__name-container'
    {...props}
  />
);
