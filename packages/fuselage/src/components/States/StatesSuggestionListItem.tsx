import React, { ReactNode } from 'react';

type StatesSuggestionListItemProps = {
  children?: ReactNode;
};

const StatesSuggestionListItem = ({
  children,
}: StatesSuggestionListItemProps) => (
  <li className='rcx-states__list-item'>
    <span className='rcx-states__list-item-wrapper'>{children}</span>
  </li>
);

export default StatesSuggestionListItem;
