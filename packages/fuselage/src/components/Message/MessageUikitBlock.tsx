import type { ReactNode } from 'react';
import React from 'react';

type MessageBlockProps = {
  className?: string;
  children?: ReactNode;
};

export const MessageUikitBlock = ({
  className: _className,
  ...props
}: MessageBlockProps) => <div className='rcx-message-uikit-block' {...props} />;
