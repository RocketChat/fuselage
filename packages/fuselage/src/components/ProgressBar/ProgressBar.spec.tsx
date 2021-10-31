import { render } from '@testing-library/react';
import React from 'react';

import { ProgressBar } from '../..';

it('renders without crashing', () => {
  render(<ProgressBar percentage={0} />);
});
