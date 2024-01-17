import { render } from '@testing-library/react';
import React from 'react';

import { Pagination } from './Pagination';

it('renders without crashing', () => {
  render(<Pagination count={0} />);
});
