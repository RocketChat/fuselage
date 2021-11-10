import { render } from '@testing-library/react';
import React from 'react';

import { Table } from '.';

it('renders without crashing', () => {
  render(<Table.Foot />, {
    wrapper: ({ children }) => <table>{children}</table>,
  });
});
