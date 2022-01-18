import { render } from '@testing-library/react';
import React from 'react';

import CodeSnippet from './CodeSnippet';

it('renders without crashing', () => {
  render(<CodeSnippet code='code' handleClick={() => {}} />);
});
