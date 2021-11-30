import { render } from '@testing-library/react';
import React from 'react';

import { InputBox } from '.';

it('renders without crashing', () => {
  render(<InputBox.Skeleton />);
});
