import type { ReactNode } from 'react';
import React from 'react';

type MessageStatusIndicatorTextProps = {
  children: ReactNode;
};

export const MessageStatusIndicatorText = ({
  children,
  ...props
}: MessageStatusIndicatorTextProps) => (
  <span className='rcx-message-status-indicator__text' {...props}>
    {children}
  </span>
);
