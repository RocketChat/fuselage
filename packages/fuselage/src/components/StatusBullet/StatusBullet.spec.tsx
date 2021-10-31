import { render } from '@testing-library/react';
import React from 'react';

import { StatusBullet } from '.';

it('renders without crashing', () => {
  render(<StatusBullet />);
});
