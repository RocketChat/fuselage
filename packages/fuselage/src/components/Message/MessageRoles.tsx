import type { HTMLAttributes } from 'react';
import React from 'react';

export const MessageRoles = (props: HTMLAttributes<HTMLDivElement>) => (
  <div className='rcx-box rcx-box--full rcx-message-header__roles' {...props} />
);
