import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import React from 'react';
import { withResizeObserverMock } from 'testing-utils/mocks/withResizeObserverMock';

import * as stories from './AutoComplete.stories';

const testCases = Object.values(composeStories(stories)).map((Story) => [
  Story.storyName || 'Story',
  Story,
]);

withResizeObserverMock();

describe('[AutoComplete Rendering]', () => {
  test.each(testCases)(
    `renders %s without crashing`,
    async (_storyname, Story) => {
      const tree = render(<Story />);
      expect(tree.baseElement).toMatchSnapshot();
    }
  );

  test.each(testCases)(
    '%s should have no a11y violations',
    async (_storyname, Story) => {
      const { container } = render(<Story />);

      const results = await axe(container);
      expect(results).toHaveNoViolations();
    }
  );
});
