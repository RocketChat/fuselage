import React, { FC, HTMLAttributes } from 'react';

export const ThreadMessageRow: FC<HTMLAttributes<HTMLDivElement>> = (props) => (
  <div className='rcx-box rcx-box--full rcx-message-thread__row' {...props} />
);
