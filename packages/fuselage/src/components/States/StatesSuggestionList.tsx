import type { AllHTMLAttributes, ReactNode } from 'react';

/** @public */
export type StatesSuggestionListProps = {
  children?: ReactNode;
} & AllHTMLAttributes<HTMLUListElement>;

/** @public */
const StatesSuggestionList = ({
  children,
  ...props
}: StatesSuggestionListProps) => (
  <ul {...props} className='rcx-states__list'>
    {children}
  </ul>
);

export default StatesSuggestionList;
