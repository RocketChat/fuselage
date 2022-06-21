import { render } from '@testing-library/react';
import React from 'react';

import { Pagination } from '.';

describe('[Pagination Component]', () => {
  it('renders without crashing', () => {
    render(<Pagination count={0} />);
  });
});
