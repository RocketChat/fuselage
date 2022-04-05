import { render } from '@testing-library/react';
import React from 'react';

import { TableRow } from '.';

it('renders without crashing', () => {
  render(<TableRow />, {
    wrapper: ({ children }) => (
      <table>
        <tbody>{children}</tbody>
      </table>
    ),
  });
});
