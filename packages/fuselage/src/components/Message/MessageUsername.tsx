import type { HTMLAttributes } from 'react';
import React from 'react';

export const MessageUsername = (props: HTMLAttributes<HTMLSpanElement>) => (
  <span
    className='rcx-box rcx-box--full rcx-message-header__username'
    {...props}
  />
);
