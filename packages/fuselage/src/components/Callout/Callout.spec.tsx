import { render } from '@testing-library/react';
import React from 'react';

import { Callout } from '.';

it('renders without crashing', () => {
  render(<Callout />);
});
