import type { AllHTMLAttributes, ReactNode } from 'react';

/** @public */
export type StatesSuggestionTextProps = {
  children?: ReactNode;
} & AllHTMLAttributes<HTMLDivElement>;

/** @public */
const StatesSuggestionText = ({
  children,
  ...props
}: StatesSuggestionTextProps) => (
  <div {...props} className='rcx-states__suggestion-text'>
    {children}
  </div>
);

export default StatesSuggestionText;
