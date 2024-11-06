import { composeStories } from '@storybook/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import { render } from '../../testing';
import * as stories from './ToggleSwitch.stories';

expect.extend(toHaveNoViolations);

const testCases = Object.values(composeStories(stories)).map((Story) => [
  Story.storyName || 'Story',
  Story,
]);

describe('[ToggleSwitch Rendering]', () => {
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
});
