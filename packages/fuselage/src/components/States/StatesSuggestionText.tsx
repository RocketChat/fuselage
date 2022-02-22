import type { ReactNode } from 'react';
import React from 'react';

type StatesSuggestionTextProps = {
  children?: ReactNode;
};

const StatesSuggestionText = ({ children }: StatesSuggestionTextProps) => (
  <div className='rcx-states__suggestion-text'>{children}</div>
);

export default StatesSuggestionText;
