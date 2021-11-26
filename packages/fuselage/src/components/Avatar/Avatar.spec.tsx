import { render } from '@testing-library/react';
import React from 'react';

import { Avatar } from '.';

it('renders without crashing', () => {
  render(<Avatar url='' />);
});
