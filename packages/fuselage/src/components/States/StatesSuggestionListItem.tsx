import type { AllHTMLAttributes, ReactNode } from 'react';

/** @public */
export type StatesSuggestionListItemProps = {
  children?: ReactNode;
} & AllHTMLAttributes<HTMLLIElement>;

/** @public */
const StatesSuggestionListItem = ({
  children,
  ...props
}: StatesSuggestionListItemProps) => (
  <li {...props} className='rcx-states__list-item'>
    <span className='rcx-states__list-item-wrapper'>{children}</span>
  </li>
);

export default StatesSuggestionListItem;
