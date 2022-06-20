import { render } from '@testing-library/react';
import React from 'react';

import { SearchInput } from '.';

describe('[SearchInput Component]', () => {
  it('renders without crashing', () => {
    render(<SearchInput />);
  });
});
