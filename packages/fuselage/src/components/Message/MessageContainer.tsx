import type { HTMLAttributes } from 'react';
import React from 'react';

export const MessageContainer = (props: HTMLAttributes<HTMLDivElement>) => (
  <div className='rcx-box rcx-box--full rcx-message-container' {...props} />
);
