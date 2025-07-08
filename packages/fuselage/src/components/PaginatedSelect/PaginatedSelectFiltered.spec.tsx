import { composeStories } from '@storybook/react-webpack5';
import { screen } from '@testing-library/dom';
import { axe } from 'jest-axe';

import { render } from '../../testing';

import { PaginatedSelectFiltered } from './PaginatedSelectFiltered';
import * as stories from './PaginatedSelectFiltered.stories';

const testCases = Object.values(composeStories(stories)).map((Story) => [
  Story.storyName || 'Story',
  Story,
]);

describe('[PaginatedSelectFiltered Component]', () => {
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

  test('should render placeholder when provided', async () => {
    const hiddenClass = 'rcx-select__wrapper--hidden';
    const placeholder = 'Select an option...';
    const defaultProps = {
      setFilter: jest.fn(),
      onChange: jest.fn(),
      options: [{ value: 'item1', label: `Item #1` }],
    };

    const { rerender } = render(
      <PaginatedSelectFiltered {...defaultProps} placeholder={placeholder} />,
    );

    expect(screen.getByRole('textbox')).toHaveAttribute(
      'placeholder',
      placeholder,
    );

    // Necessary due to styles not being properly computed in the test environment
    expect(screen.getByRole('textbox').parentElement).not.toHaveClass(
      hiddenClass,
    );

    rerender(<PaginatedSelectFiltered {...defaultProps} value='item1' />);

    expect(screen.getByRole('textbox')).not.toHaveAttribute(
      'placeholder',
      placeholder,
    );

    // Necessary due to styles not being properly computed in the test environment
    expect(screen.getByRole('textbox').parentElement).toHaveClass(hiddenClass);
  });
});
