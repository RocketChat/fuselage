import { fireEvent, render, screen, waitFor } from '@testing-library/react';
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

  fireEvent.click(screen.getByRole('combobox'));

  await waitFor(() =>
    expect(screen.queryByRole('listbox')).toBeInTheDocument()
  );

  fireEvent.mouseDown(screen.getByRole('option', { name: 'Item #2' }));

  expect(handleChange).toHaveBeenCalledTimes(1);
  expect(handleChange).toHaveBeenCalledWith('2');
});

it('accepts filter', async () => {
  const handleSetFilter = jest.fn();

  render(
    <SelectFiltered
      options={[
        ['1', 'Item #1'],
        ['2', 'Item #2'],
      ]}
      onChange={jest.fn()}
      setFilter={handleSetFilter}
    />
  );

  fireEvent.input(screen.getByRole('textbox'), { target: { value: '#1' } });

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

  fireEvent.click(screen.getByRole('combobox'));

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
      onChange={jest.fn()}
    />
  );

  fireEvent.click(screen.getByRole('combobox'));

  fireEvent.input(screen.getByRole('textbox'), { target: { value: '#1' } });

  await waitFor(() =>
    expect(screen.queryByRole('listbox')).toBeInTheDocument()
  );

  expect(
    screen.queryByRole('option', { name: 'Item #2' })
  ).not.toBeInTheDocument();
});
