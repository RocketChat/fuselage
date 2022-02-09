import React, { ReactNode } from 'react';

type StatesSuggestionTextProps = {
  children?: ReactNode;
};

const StatesSuggestionText = ({ children }: StatesSuggestionTextProps) => (
  <div className='rcx-states__suggestion-text'>{children}</div>
);

export default StatesSuggestionText;
