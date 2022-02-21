import type { ReactNode } from 'react';
import React from 'react';

type MessageSystemBlockProps = {
  children?: ReactNode;
};

export const MessageSystemBlock = (props: MessageSystemBlockProps) => (
  <div className='rcx-message-system__block' {...props} />
);
