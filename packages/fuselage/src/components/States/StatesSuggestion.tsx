import type { ReactNode } from 'react';
import React from 'react';

type StatesSuggestionProps = {
  children?: ReactNode;
};

const StatesSuggestion = ({ children }: StatesSuggestionProps) => (
  <div className='rcx-states__suggestion'>{children}</div>
);

export default StatesSuggestion;
