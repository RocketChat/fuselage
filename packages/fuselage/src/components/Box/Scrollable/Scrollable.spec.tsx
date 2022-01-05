import { render } from '@testing-library/react';
import React from 'react';

import Scrollable from '.';

it('renders without crashing', () => {
  render(<Scrollable />);
});
