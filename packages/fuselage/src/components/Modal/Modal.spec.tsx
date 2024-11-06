import { composeStories } from '@storybook/react';
import { screen } from '@testing-library/react';
import { axe } from 'jest-axe';

import { render } from '../../testing';
import * as stories from './Modal.stories';
import { Default } from './Modal.stories';

const testCases = Object.values(composeStories(stories)).map((Story) => [
  Story.storyName || 'Story',
  Story,
]);

describe('[Modal Component]', () => {
  test.each(testCases)(
    `%s should match the snapshot`,
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

  test('Default should render the dialog a11y compliant', () => {
    render(<Default />);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });
});
