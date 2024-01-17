import { render } from '@testing-library/react';
import React from 'react';

import { NumberInput } from './NumberInput';

it('renders without crashing', () => {
  render(<NumberInput />);
});
