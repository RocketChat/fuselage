import type { ReactNode } from 'react';
import React from 'react';

type MessageOrderedListProps = {
  children?: ReactNode;
};

export const MessageOrderedList = (props: MessageOrderedListProps) => (
  <ol className='rcx-box rcx-box--full rcx-message-ordered-list' {...props} />
);
