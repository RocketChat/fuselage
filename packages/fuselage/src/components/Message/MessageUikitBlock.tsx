import type { ReactNode } from 'react';
import React from 'react';

type MessageUikitBlockProps = {
  className?: string;
  children?: ReactNode;
};

export const MessageUikitBlock = ({
  className: _className,
  ...props
}: MessageUikitBlockProps) => (
  <div className='rcx-message-uikit-block' {...props} />
);
