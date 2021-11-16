import { render } from '@testing-library/react';
import React from 'react';

import { Field } from '.';

it('renders without crashing', () => {
  render(<Field.Error />);
});
