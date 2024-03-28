import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import React from 'react';
import { SSRProvider } from 'react-aria';

import * as stories from './NavBar.stories';

const testCases = Object.values(composeStories(stories)).map((Story) => [
  Story.storyName || 'Story',
  Story,
]);

describe('[NavBar Component]', () => {
  test.each(testCases)(
    `renders %s without crashing`,
    async (_storyname, Story) => {
      const tree = render(<Story />, {
        wrapper: ({ children }) => <SSRProvider>{children}</SSRProvider>,
      });
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
