import { render } from '@testing-library/react';
import React from 'react';

import { TableCell } from '.';

it('renders without crashing', () => {
  render(<TableCell />, {
    wrapper: ({ children }) => (
      <table>
        <tbody>
          <tr>{children}</tr>
        </tbody>
      </table>
    ),
  });
});
