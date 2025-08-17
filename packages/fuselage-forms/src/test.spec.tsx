import { composeStories } from '@storybook/react-webpack5';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import * as _stories from './Field/Field.stories';

// TODO: Fix select a11y violations
// "Interactive controls must not be nested (nested-interactive)"
// This is an issue in the component itself and not with the fields
const { WithSelect: _, ...stories } = _stories;

const testCases = Object.values(composeStories(stories)).map((Story) => [
  Story.storyName || 'Story',
  Story,
]);

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
