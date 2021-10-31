import { render } from '@testing-library/react';
import React from 'react';

import { TelephoneInput } from '.';

it('renders without crashing', () => {
  render(<TelephoneInput />);
});
