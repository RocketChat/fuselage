import { render } from '@testing-library/react';
import React from 'react';

import { Scrollable } from '../..';

describe('Scrollabe Component', () => {
  it('renders without crashing', () => {
    render(<Scrollable />);
  });
});
