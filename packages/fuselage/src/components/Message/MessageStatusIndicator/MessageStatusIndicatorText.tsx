import type { ReactNode } from 'react';
import React from 'react';

type MessageStatusIndicatorTextProps = {
  children: ReactNode;
};

export const MessageStatusIndicatorText = ({
  children,
}: MessageStatusIndicatorTextProps) => (
  <span className='rcx-message-status-indicator__text' aria-hidden>
    {children}
  </span>
);
