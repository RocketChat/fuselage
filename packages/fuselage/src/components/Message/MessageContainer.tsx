import type { ReactNode } from 'react';
import React from 'react';

type MessageContainerProps = {
  children?: ReactNode;
};

export const MessageContainer = (props: MessageContainerProps) => (
  <div className='rcx-box rcx-box--full rcx-message-container' {...props} />
);
