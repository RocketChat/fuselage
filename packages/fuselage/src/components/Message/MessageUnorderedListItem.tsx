import type { ReactNode } from 'react';
import React from 'react';

type MessageUnorderedListItemProps = {
  children?: ReactNode;
};

export const MessageUnorderedListItem = (
  props: MessageUnorderedListItemProps
) => (
  <li
    className='rcx-box rcx-box--full rcx-message-unordered-list__item'
    {...props}
  />
);
