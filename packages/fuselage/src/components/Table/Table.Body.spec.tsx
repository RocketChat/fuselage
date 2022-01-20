import { render } from '@testing-library/react';
import React from 'react';

import { TableBody } from '.';

it('renders without crashing', () => {
  render(<TableBody />, {
    wrapper: ({ children }) => <table>{children}</table>,
  });
});
