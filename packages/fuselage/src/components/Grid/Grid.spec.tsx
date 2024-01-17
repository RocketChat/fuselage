import { render } from '@testing-library/react';
import React from 'react';

import { Grid } from './Grid';

it('renders Grid without crashing', () => {
  render(<Grid />);
});

it('renders Grid.Item without crashing', () => {
  render(<Grid.Item />);
});
