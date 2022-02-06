import React, { ReactNode } from 'react';

type MessageSystemBlockProps = {
  children?: ReactNode;
};

export const MessageSystemBlock = (props: MessageSystemBlockProps) => (
  <div className='rcx-message-system__block' {...props} />
);
