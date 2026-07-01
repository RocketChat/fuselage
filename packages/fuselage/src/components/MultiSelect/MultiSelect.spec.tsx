import { composeStories } from '@storybook/react-webpack5';
import { act, fireEvent, screen } from '@testing-library/react';
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

test('stays closed when the toggle is clicked while open (regression for #1869)', () => {
  // The visibility state is debounced (10ms). When the open dropdown is
  // clicked, the anchor blurs first (`onBlur: hide`) and that debounced hide
  // flushes before the trailing `click` fires. Previously `handleClick` read
  // the already-HIDDEN `visible` state and re-opened the dropdown. Reproduce
  // that exact ordering with controlled timers.
  jest.useFakeTimers();

  try {
    const { Default } = composeStories(stories);
    render(<Default />);

    const combobox = screen.getByRole('combobox');
    const container = combobox.closest('.rcx-select') as HTMLElement;

    // Open the dropdown.
    fireEvent.click(container);
    act(() => {
      jest.advanceTimersByTime(10);
    });
    expect(combobox).toHaveAttribute('aria-expanded', 'true');

    // Clicking the toggle: blur closes it, then the click must keep it closed.
    fireEvent.blur(combobox);
    act(() => {
      jest.advanceTimersByTime(10);
    });
    fireEvent.click(container);
    act(() => {
      jest.advanceTimersByTime(10);
    });

    expect(combobox).toHaveAttribute('aria-expanded', 'false');
  } finally {
    jest.useRealTimers();
  }
});

test('MultiSelectFiltered prevents Chrome autocomplete overlay (regression)', () => {
  const { WithFilter } = composeStories(stories);

  render(<WithFilter />);

  const inputElement = screen.getByRole('combobox');

  expect(inputElement).toHaveAttribute('autocomplete', 'off');
});
