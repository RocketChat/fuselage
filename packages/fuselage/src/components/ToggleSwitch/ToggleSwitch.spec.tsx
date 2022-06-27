import { render } from '@testing-library/react';
import React from 'react';

import { ToggleSwitch } from '.';

describe('[ToggleSwitch Component]', () => {
  it('renders without crashing', () => {
    render(<ToggleSwitch />);
  });
});
