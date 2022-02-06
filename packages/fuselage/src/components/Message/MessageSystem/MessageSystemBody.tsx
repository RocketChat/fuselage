import React, { HTMLAttributes } from 'react';

type MessageSystemBodyProps = HTMLAttributes<HTMLDivElement>;

export const MessageSystemBody = (props: MessageSystemBodyProps) => (
  <div className='rcx-message-system__body' {...props} />
);
