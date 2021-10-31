import { render } from '@testing-library/react';
import React from 'react';

import { TextAreaInput } from '.';

it('renders without crashing', () => {
  render(<TextAreaInput />);
});
