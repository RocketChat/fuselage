import type { ReactNode } from 'react';
import React from 'react';

/** @public */
export type MessageStatusIndicatorTextProps = {
  children: ReactNode;
};

/** @public */
const MessageStatusIndicatorText = ({
  children,
}: MessageStatusIndicatorTextProps) => (
  <span className='rcx-message-status-indicator__text' aria-hidden>
    {children}
  </span>
);

export default MessageStatusIndicatorText;
