import { render } from '@testing-library/react';
import React from 'react';

import { TableHead } from '.';

it('renders without crashing', () => {
  render(<TableHead />, {
    wrapper: ({ children }) => <table>{children}</table>,
  });
});
