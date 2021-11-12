import { render } from '@testing-library/react';
import React from 'react';

import { EmailInput } from '.';

it('renders without crashing', () => {
  render(<EmailInput />);
});
