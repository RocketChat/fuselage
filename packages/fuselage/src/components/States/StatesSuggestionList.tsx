import React, { ReactNode } from 'react';

type StatesSuggestionListProps = {
  children?: ReactNode;
};

const StatesSuggestionList = ({ children }: StatesSuggestionListProps) => (
  <ul className='rcx-states__list'>{children}</ul>
);

export default StatesSuggestionList;
