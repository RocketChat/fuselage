import { render } from '@testing-library/react';
import React from 'react';

import { Tag } from '.';

describe('[Tag Component]', () => {
  it('renders without crashing', () => {
    render(<Tag />);
  });
});
