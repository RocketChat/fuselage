import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { withResizeObserverMock } from 'testing-utils/mocks/withResizeObserverMock';

import { SelectFiltered } from '.';

withResizeObserverMock();

it('renders without crashing', () => {
  render(<SelectFiltered options={[]} onChange={() => undefined} />);
});

it('renders with options', async () => {
  const handleChange = jest.fn();

  render(
    <SelectFiltered
      options={[
        ['1', 'Item #1'],
        ['2', 'Item #2'],
      ]}
      onChange={handleChange}
    />
  );

  userEvent.click(screen.getByRole('combobox'));

  await waitFor(() =>
    expect(screen.queryByRole('listbox')).toBeInTheDocument()
  );

  userEvent.click(screen.getByRole('option', { name: 'Item #2' }));

  expect(handleChange).toHaveBeenCalledTimes(1);
  expect(handleChange).toHaveBeenCalledWith('2', [['2', 'Item #2']]);
});

it('accepts filter', async () => {
  const handleSetFilter = jest.fn();

  render(
    <SelectFiltered
      options={[
        ['1', 'Item #1'],
        ['2', 'Item #2'],
      ]}
      setFilter={handleSetFilter}
    />
  );

  userEvent.paste(screen.getByRole('textbox'), '#1');

  expect(handleSetFilter).toHaveBeenCalledTimes(1);
  expect(handleSetFilter).toHaveBeenCalledWith('#1');
});

it('does NOT filters options if controlled', async () => {
  render(
    <SelectFiltered
      filter='Item #1'
      options={[
        ['1', 'Item #1'],
        ['2', 'Item #2'],
      ]}
      onChange={jest.fn()}
    />
  );

  userEvent.click(screen.getByRole('combobox'));

  await waitFor(() =>
    expect(screen.queryByRole('listbox')).toBeInTheDocument()
  );

  expect(screen.queryByRole('option', { name: 'Item #2' })).toBeInTheDocument();
});

it('does filters options if uncontrolled', async () => {
  render(
    <SelectFiltered
      options={[
        ['1', 'Item #1'],
        ['2', 'Item #2'],
      ]}
    />
  );

  userEvent.click(screen.getByRole('combobox'));

  userEvent.paste(screen.getByRole('textbox'), '#1');

  await waitFor(() =>
    expect(screen.queryByRole('listbox')).toBeInTheDocument()
  );

  expect(
    screen.queryByRole('option', { name: 'Item #2' })
  ).not.toBeInTheDocument();
});
