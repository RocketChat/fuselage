import { render } from '@testing-library/react';
import React from 'react';

import Tooltip from '.';

describe('[Tooltip Component]', () => {
  it('renders without crashing', () => {
    render(<Tooltip />);
  });
});
