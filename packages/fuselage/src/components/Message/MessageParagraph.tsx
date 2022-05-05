import type { ReactNode } from 'react';
import React from 'react';

type MessageParagraphProps = {
  children?: ReactNode;
};

export const MessageParagraph = (props: MessageParagraphProps) => (
  <p className='rcx-box rcx-box--full rcx-message-paragraph' {...props} />
);
