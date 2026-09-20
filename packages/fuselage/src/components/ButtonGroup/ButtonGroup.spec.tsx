import { composeStories } from '@storybook/react-webpack5';
import { axe } from 'jest-axe';

import { render } from '../../testing';
import { Button } from '../Button';

import ButtonGroup from './ButtonGroup';
import * as stories from './ButtonGroup.stories';

const testCases = Object.values(composeStories(stories)).map((Story) => [
  Story.storyName || 'Story',
  Story,
]);

describe('[ButtonGroup Rendering]', () => {
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

describe('ghostPosition', () => {
  it('marks the joined group with the ghost position modifier', () => {
    const { getByRole } = render(
      <ButtonGroup joined ghostPosition='end'>
        <Button>Reply</Button>
        <Button square icon='chevron-down' aria-label='More reply actions' />
      </ButtonGroup>,
    );
    expect(getByRole('group')).toHaveClass('rcx-button-group--ghost-end');
  });

  it('is not accepted without joined', () => {
    render(
      // @ts-expect-error ghostPosition requires a joined group
      <ButtonGroup ghostPosition='end'>
        <Button>Reply</Button>
      </ButtonGroup>,
    );
  });
});
