import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { withResizeObserverMock } from 'testing-utils/mocks/withResizeObserverMock';

import { MultiSelectFiltered } from '.';

withResizeObserverMock();

it('renders without crashing', () => {
  render(<MultiSelectFiltered options={[]} onChange={() => undefined} />);
});

it('renders with options', async () => {
  const handleChange = jest.fn();

  render(
    <MultiSelectFiltered
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
  userEvent.click(screen.getByRole('option', { name: 'Item #1' }));

  expect(handleChange).toHaveBeenCalledTimes(2);
  expect(handleChange).toHaveBeenNthCalledWith(1, ['2'], [['2', 'Item #2']]);
  expect(handleChange).toHaveBeenNthCalledWith(
    2,
    ['2', '1'],
    [
      ['2', 'Item #2'],
      ['1', 'Item #1'],
    ]
  );
});

it('accepts filter', async () => {
  const handleSetFilter = jest.fn();

  render(
    <MultiSelectFiltered
      options={[
        ['1', 'Item #1'],
        ['2', 'Item #2'],
      ]}
      onChange={jest.fn()}
      setFilter={handleSetFilter}
    />
  );

  userEvent.paste(screen.getByRole('textbox'), '#1');

  expect(handleSetFilter).toHaveBeenCalledTimes(1);
  expect(handleSetFilter).toHaveBeenCalledWith('#1');
});

it('does NOT filters options if controlled', async () => {
  render(
    <MultiSelectFiltered
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
    <MultiSelectFiltered
      options={[
        ['1', 'Item #1'],
        ['2', 'Item #2'],
      ]}
      onChange={jest.fn()}
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
