import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { withResizeObserverMock } from 'testing-utils/mocks/withResizeObserverMock';

import MultiSelect from './MultiSelect';

withResizeObserverMock();

it('renders without crashing', () => {
  render(<MultiSelect options={[]} onChange={() => undefined} />);
});

it('renders with options', async () => {
  const handleChange = jest.fn();

  render(
    <MultiSelect
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
