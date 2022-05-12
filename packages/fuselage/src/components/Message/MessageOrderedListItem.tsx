import type { ReactNode } from 'react';
import React from 'react';

type MessageOrderedListItemProps = {
  value: number;
  children?: ReactNode;
};

export const MessageOrderedListItem = (props: MessageOrderedListItemProps) => (
  <li
    className='rcx-box rcx-box--full rcx-message-ordered-list__item'
    {...props}
  />
);
