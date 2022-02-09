import React, { ReactNode } from 'react';

type ThreadMessageBodyProps = {
  children?: ReactNode;
};

export const ThreadMessageBody = (props: ThreadMessageBodyProps) => (
  <div
    className='rcx-box rcx-box--full rcx-message-thread__message'
    {...props}
  />
);
