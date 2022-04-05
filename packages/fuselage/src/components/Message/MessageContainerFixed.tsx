import type { ReactNode } from 'react';
import React from 'react';

type MessageContainerFixedProps = {
  children?: ReactNode;
};

export const MessageContainerFixed = (props: MessageContainerFixedProps) => (
  <div
    className='rcx-box rcx-box--full rcx-message-container rcx-message-container--fixed'
    {...props}
  />
);
