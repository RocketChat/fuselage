import type { AllHTMLAttributes, ReactNode } from 'react';
import React from 'react';

type StatesSuggestionListProps = {
  children?: ReactNode;
} & AllHTMLAttributes<HTMLUListElement>;

const StatesSuggestionList = ({
  children,
  ...props
}: StatesSuggestionListProps) => (
  <ul {...props} className='rcx-states__list'>
    {children}
  </ul>
);

export default StatesSuggestionList;
