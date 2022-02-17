import type { HTMLAttributes } from 'react';
import React from 'react';

type ThreadMessageRowProps = HTMLAttributes<HTMLDivElement>;

export const ThreadMessageRow = (props: ThreadMessageRowProps) => (
  <div className='rcx-box rcx-box--full rcx-message-thread__row' {...props} />
);
