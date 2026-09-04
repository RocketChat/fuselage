import { composeStories } from '@storybook/react-webpack5';
import { axe } from 'jest-axe';

import { render } from '../../testing';
import { ButtonGroup } from '../ButtonGroup';

import Button from './Button';
import * as stories from './Button.stories';
import IconButton from './IconButton';

const { Default } = composeStories(stories);

describe('[Button Component]', () => {
  it('renders Button without crashing', () => {
    render(<Default />);
  });

  it('should have no a11y violations', async () => {
    const { container } = render(<Default />);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe('ghost', () => {
  it('applies inside a joined ButtonGroup', () => {
    const { getByRole } = render(
      <ButtonGroup joined>
        <Button ghost>Ghost</Button>
      </ButtonGroup>,
    );
    expect(getByRole('button')).toHaveClass('rcx-button--ghost');
  });

  it('is ignored outside a joined ButtonGroup', () => {
    const { getByRole } = render(<Button ghost>Ghost</Button>);
    expect(getByRole('button')).not.toHaveClass('rcx-button--ghost');
  });

  it('is ignored in a non-joined ButtonGroup', () => {
    const { getByRole } = render(
      <ButtonGroup>
        <IconButton icon='chevron-down' ghost aria-label='Options' />
      </ButtonGroup>,
    );
    expect(getByRole('button')).not.toHaveClass('rcx-button--ghost');
  });
});
