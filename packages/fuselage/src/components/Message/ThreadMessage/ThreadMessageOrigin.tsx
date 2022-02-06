import React, { ReactNode } from 'react';

type ThreadMessageOriginProps = {
  children?: ReactNode;
};

export const ThreadMessageOrigin = (props: ThreadMessageOriginProps) => (
  <div
    className='rcx-box rcx-box--full rcx-message-thread__origin'
    {...props}
  />
);
