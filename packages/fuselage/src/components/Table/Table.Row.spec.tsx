import { render } from '@testing-library/react';
import React from 'react';

import { Table } from '.';

it('renders without crashing', () => {
  render(<Table.Row />, {
    wrapper: ({ children }) => (
      <table>
        <tbody>{children}</tbody>
      </table>
    ),
  });
});
