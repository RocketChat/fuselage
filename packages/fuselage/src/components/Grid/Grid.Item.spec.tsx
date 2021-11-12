import { render } from '@testing-library/react';
import React from 'react';

import { Grid } from '.';

it('renders without crashing', () => {
  render(<Grid.Item />);
});
