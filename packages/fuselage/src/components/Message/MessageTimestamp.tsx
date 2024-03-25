import type { HTMLAttributes } from 'react';
import React from 'react';

export const MessageTimestamp = (props: HTMLAttributes<HTMLSpanElement>) => (
  <span className='rcx-box rcx-box--full rcx-message-header__time' {...props} />
);
