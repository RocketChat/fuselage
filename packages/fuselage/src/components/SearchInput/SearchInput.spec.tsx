import { render } from '@testing-library/react';
import React from 'react';

import { SearchInput } from '.';

it('renders without crashing', () => {
  render(<SearchInput />);
});
