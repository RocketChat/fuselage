import type { AllHTMLAttributes } from 'react';
import React from 'react';

type MessageUsernameProps = AllHTMLAttributes<HTMLSpanElement>;

export const MessageUsername = (props: MessageUsernameProps) => (
  <span
    className='rcx-box rcx-box--full rcx-message-header__username'
    {...props}
  />
);
