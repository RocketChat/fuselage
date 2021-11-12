import { render } from '@testing-library/react';
import React from 'react';

import { Table } from '.';

it('renders without crashing', () => {
  render(<Table.Cell />, {
    wrapper: ({ children }) => (
      <table>
        <tbody>
          <tr>{children}</tr>
        </tbody>
      </table>
    ),
  });
});
