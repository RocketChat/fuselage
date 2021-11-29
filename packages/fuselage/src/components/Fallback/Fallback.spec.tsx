import { render } from '@testing-library/react';
import React from 'react';

import { Fallback } from '.';

it('renders without crashing', () => {
  render(<Fallback />);
});
