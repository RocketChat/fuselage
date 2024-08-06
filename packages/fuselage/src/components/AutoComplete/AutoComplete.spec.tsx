import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
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
      const tree = render(<Story />, { legacyRoot: true });
      expect(tree.baseElement).toMatchSnapshot();
    }
  );

  test.each(testCases)(
    '%s should have no a11y violations',
    async (_storyname, Story) => {
      const { container } = render(<Story />, { legacyRoot: true });

      const results = await axe(container);
      expect(results).toHaveNoViolations();
    }
  );
});
