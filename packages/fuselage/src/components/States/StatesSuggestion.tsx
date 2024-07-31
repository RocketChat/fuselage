import type { ReactNode, AllHTMLAttributes } from 'react';

/** @public */
export type StatesSuggestionProps = {
  children?: ReactNode;
} & AllHTMLAttributes<HTMLDivElement>;

/** @public */
const StatesSuggestion = ({ children, ...props }: StatesSuggestionProps) => (
  <div {...props} className='rcx-states__suggestion'>
    {children}
  </div>
);

export default StatesSuggestion;
