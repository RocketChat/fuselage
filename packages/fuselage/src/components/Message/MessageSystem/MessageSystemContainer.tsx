import type { ReactNode } from 'react';
import React from 'react';

type MessageSystemContainerProps = {
  children?: ReactNode;
};

export const MessageSystemContainer = (props: MessageSystemContainerProps) => (
  <div
    className='rcx-box rcx-box--full rcx-message-system__container'
    {...props}
  />
);
