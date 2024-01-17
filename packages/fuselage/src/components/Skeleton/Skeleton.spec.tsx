import { render } from '@testing-library/react';
import React from 'react';

import { Skeleton } from '.';

it('renders without crashing', () => {
  render(<Skeleton />);
});
