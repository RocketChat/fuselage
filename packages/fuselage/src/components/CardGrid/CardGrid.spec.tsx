import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import React from 'react';

import * as gridStories from './CardGrid.stories';

const gridTestCases = Object.values(composeStories(gridStories)).map(
  (Story) => [Story.storyName || 'Story', Story]
);

describe('[CardGrid Rendering]', () => {
  test.each(gridTestCases)(
    `renders %s without crashing`,
    async (_storyname, Story) => {
      const tree = render(<Story />);
      expect(tree.baseElement).toMatchSnapshot();
    }
  );

  test.each(gridTestCases)(
    '%s should have no a11y violations',
    async (_storyname, Story) => {
      const { container } = render(<Story />);

      const results = await axe(container);
      expect(results).toHaveNoViolations();
    }
  );
});
