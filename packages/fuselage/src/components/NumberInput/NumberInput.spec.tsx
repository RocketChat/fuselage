import { render } from '@testing-library/react';
import React from 'react';

import { NumberInput } from '.';

it('renders without crashing', () => {
  render(<NumberInput />);
});
