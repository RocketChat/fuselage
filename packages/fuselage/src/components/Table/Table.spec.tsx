import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import React from 'react';

import { Table, TableRow, TableHead, TableBody, TableCell, TableFoot } from '.';
import * as stories from './Table.stories';

const { Fixed, Default, Selected, Striped } = composeStories(stories);
expect.extend(toHaveNoViolations);

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

  it('should have no a11y violations', async () => {
    const { container: defaultContainer } = render(<Default />);
    const { container: selectedContainer } = render(<Selected />);
    const { container: stripedContainer } = render(<Striped />);
    const { container: fixedContainer } = render(<Fixed />);

    const defaultResults = await axe(defaultContainer);
    const selectedResults = await axe(selectedContainer);
    const stripedResults = await axe(stripedContainer);
    const fixedResults = await axe(fixedContainer);
    expect(defaultResults).toHaveNoViolations();
    expect(selectedResults).toHaveNoViolations();
    expect(stripedResults).toHaveNoViolations();
    expect(fixedResults).toHaveNoViolations();
  });
});
