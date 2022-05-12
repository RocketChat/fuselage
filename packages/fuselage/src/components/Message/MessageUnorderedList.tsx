import type { ReactNode } from 'react';
import React from 'react';

type MessageUnorderedListProps = {
  children?: ReactNode;
};

export const MessageUnorderedList = (props: MessageUnorderedListProps) => (
  <ul className='rcx-box rcx-box--full rcx-message-unordered-list' {...props} />
);
