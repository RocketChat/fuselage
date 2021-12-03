import { render } from '@testing-library/react';
import React from 'react';

import { Button } from '.';

it('renders without crashing', () => {
  render(<Button />);
});
