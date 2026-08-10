import { composeStories } from '@storybook/react-webpack5';
import { screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import { withResizeObserverMock } from 'testing-utils/mocks/withResizeObserverMock';

import { render } from '../../testing';

import * as stories from './MultiSelect.stories';

const testCases = Object.values(composeStories(stories)).map((Story) => [
  Story.storyName || 'Story',
  Story,
]);

withResizeObserverMock();

test.each(testCases)(
  `renders %s without crashing`,
  async (_storyname, Story) => {
    const tree = render(<Story />);
    expect(tree.baseElement).toMatchSnapshot();
  },
);

test.each(testCases)(
  '%s should have no a11y violations',
  async (_storyname, Story) => {
    const { container } = render(<Story />);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  },
);

test('MultiSelectFiltered prevents Chrome autocomplete overlay (regression)', () => {
  const { WithFilter } = composeStories(stories);

  render(<WithFilter />);

  const inputElement = screen.getByRole('combobox');

  expect(inputElement).toHaveAttribute('autocomplete', 'off');
});

test('unchecks the option checkbox on deselect', async () => {
  const { Default } = composeStories(stories);

  render(<Default />);

  await userEvent.click(screen.getByRole('combobox'));

  await waitFor(() => expect(screen.getByRole('listbox')).toBeInTheDocument());

  const option = screen.getByRole('option', { name: /a teste 1/ });
  const checkbox = within(option).getByRole('checkbox');

  expect(option).toHaveAttribute('aria-selected', 'false');
  expect(checkbox).not.toBeChecked();

  await userEvent.click(option);

  expect(option).toHaveAttribute('aria-selected', 'true');
  expect(checkbox).toBeChecked();

  await userEvent.click(option);

  expect(option).toHaveAttribute('aria-selected', 'false');
  expect(checkbox).not.toBeChecked();
});
