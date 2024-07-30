import type { HTMLAttributes, ReactElement } from 'react';
import React from 'react';

/** @public */
export type MessageLeftContainerProps = HTMLAttributes<HTMLDivElement>;

/** @public */
const MessageLeftContainer = (
  props: MessageLeftContainerProps
): ReactElement => (
  <div
    className='rcx-box rcx-box--full rcx-message-container rcx-message-container--left'
    {...props}
  />
);

export default MessageLeftContainer;
