import { render } from '@testing-library/react';
import React from 'react';

import { TextInput } from '.';

it('renders without crashing', () => {
  render(<TextInput />);
});
