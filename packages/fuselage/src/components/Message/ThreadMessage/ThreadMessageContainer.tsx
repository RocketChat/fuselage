import React, { ReactNode } from 'react';

type ThreadMessageContainerProps = {
  children?: ReactNode;
};

export const ThreadMessageContainer = (props: ThreadMessageContainerProps) => (
  <div
    className='rcx-box rcx-box--full rcx-message-thread__container'
    {...props}
  />
);
