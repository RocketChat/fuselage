import { render } from '@testing-library/react';
import React from 'react';

import { Table, TableRow, TableHead, TableBody, TableCell, TableFoot } from '.';

describe('[Table Component]', () => {
  it('renders Table without crashing', () => {
    render(<Table />);
  });

  it('renders TableRow without crashing', () => {
    render(<TableRow />, {
      wrapper: ({ children }) => (
        <table>
          <tbody>{children}</tbody>
        </table>
      ),
    });
  });

  it('renders TableHead without crashing', () => {
    render(<TableHead />, {
      wrapper: ({ children }) => <table>{children}</table>,
    });
  });

  it('renders TableBody without crashing', () => {
    render(<TableBody />, {
      wrapper: ({ children }) => <table>{children}</table>,
    });
  });

  it('renders TableFoot without crashing', () => {
    render(<TableFoot />, {
      wrapper: ({ children }) => <table>{children}</table>,
    });
  });

  it('renders TableCell without crashing', () => {
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
});
