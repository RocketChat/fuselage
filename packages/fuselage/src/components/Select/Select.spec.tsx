import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { withResizeObserverMock } from 'testing-utils/mocks/withResizeObserverMock';

import { Select } from '.';

withResizeObserverMock();

it('renders without crashing', () => {
  render(<Select options={[]} onChange={() => undefined} />);
});

it('renders with options', async () => {
  const handleChange = jest.fn();

  render(
    <Select
      options={[
        ['1', 'Item #1'],
        ['2', 'Item #2'],
      ]}
      onChange={handleChange}
    />
  );

  userEvent.click(screen.getByRole('combobox'));

  await waitFor(() => expect(screen.getByRole('listbox')).toBeInTheDocument());

  userEvent.click(screen.getByRole('option', { name: 'Item #2' }));

  expect(handleChange).toHaveBeenCalledTimes(1);
  expect(handleChange).toHaveBeenCalledWith('2');
});
