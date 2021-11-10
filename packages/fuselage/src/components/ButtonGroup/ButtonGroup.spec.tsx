import { render } from '@testing-library/react';
import React from 'react';

import { ButtonGroup } from '.';

it('renders without crashing', () => {
  render(<ButtonGroup />);
});
