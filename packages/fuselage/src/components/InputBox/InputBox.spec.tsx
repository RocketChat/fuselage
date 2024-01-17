import { render } from '@testing-library/react';
import React from 'react';

import { InputBox } from './InputBox';
import { InputBoxSkeleton } from './InputBoxSkeleton';

it('renders InputBox without crashing', () => {
  render(<InputBox type='text' />);
});

it('renders InputBoxSkeleton without crashing', () => {
  render(<InputBoxSkeleton />);
});
