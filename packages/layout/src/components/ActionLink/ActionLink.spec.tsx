import { composeStories } from '@storybook/react-vite';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { test, expect } from 'vitest';

import * as stories from './ActionLink.stories.js';

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
