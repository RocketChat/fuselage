import { render } from '@testing-library/react';
import React from 'react';

import { InputBox } from '.';

describe('[InputBox Component]', () => {
  it('renders InputBox without crashing', () => {
    render(<InputBox type='text' />);
  });

  it('renders InputBox.Skeleton without crashing', () => {
    render(<InputBox.Skeleton />);
  });
});
