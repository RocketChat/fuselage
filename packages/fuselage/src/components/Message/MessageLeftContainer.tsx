import React, { ReactElement, ReactNode } from 'react';

type MessageLeftContainerProps = {
  children?: ReactNode;
};

export const MessageLeftContainer = (
  props: MessageLeftContainerProps
): ReactElement => (
  <div
    className='rcx-box rcx-box--full rcx-message-container rcx-message-container--left'
    {...props}
  />
);
