import React, { FC } from 'react';

const StatesSuggestionListItem: FC = ({ children }) => (
  <li className='rcx-states__list-item'>
    <span className='rcx-states__list-item-wrapper'>{children}</span>
  </li>
);

export default StatesSuggestionListItem;
