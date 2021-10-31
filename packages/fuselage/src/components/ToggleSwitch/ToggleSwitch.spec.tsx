import { render } from '@testing-library/react';
import React from 'react';

import { ToggleSwitch } from '.';

it('renders without crashing', () => {
  render(<ToggleSwitch />);
});
