import type { AllHTMLAttributes, ReactNode } from 'react';
import React from 'react';

type StatesSuggestionTextProps = {
  children?: ReactNode;
} & AllHTMLAttributes<HTMLDivElement>;

const StatesSuggestionText = ({
  children,
  ...props
}: StatesSuggestionTextProps) => (
  <div {...props} className='rcx-states__suggestion-text'>
    {children}
  </div>
);

export default StatesSuggestionText;
