import { render } from '@testing-library/react';
import React from 'react';

import ThreadMessage from '.';

it('renders without crashing', () => {
  render(<ThreadMessage />);
});
