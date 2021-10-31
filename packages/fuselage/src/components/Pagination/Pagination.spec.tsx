import { render } from '@testing-library/react';
import React from 'react';

import { Pagination } from '.';

it('renders without crashing', () => {
  render(<Pagination count={0} />);
});
