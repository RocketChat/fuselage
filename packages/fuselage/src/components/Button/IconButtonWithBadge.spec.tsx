import { composeStories } from '@storybook/react-webpack5';
import { screen } from '@testing-library/react';

import { render } from '../../testing';
import { Badge } from '../Badge';

import IconButtonWithBadge from './IconButtonWithBadge';
import * as stories from './IconButtonWithBadge.stories';

const { Default, WithoutBadge, Dot, Variants, WithAvatar } =
  composeStories(stories);

describe('[IconButtonWithBadge Component]', () => {
  describe('Story renders without crashing', () => {
    it('Default', () => {
      render(<Default />);
    });
    it('WithoutBadge', () => {
      render(<WithoutBadge />);
    });
    it('Dot', () => {
      render(<Dot />);
    });
    it('Variants', () => {
      render(<Variants />);
    });
    it('WithAvatar', () => {
      render(<WithAvatar />);
    });
  });

  it('should display the badge', () => {
    render(
      <IconButtonWithBadge
        icon='balloon'
        aria-label='balloon'
        badge={<Badge>2</Badge>}
      />,
    );
    screen.getByText('2');
  });

  it('should not render a badge when there is none', () => {
    const { container } = render(
      <IconButtonWithBadge icon='balloon' aria-label='balloon' />,
    );
    expect(
      container.querySelector('.rcx-button__badge'),
    ).not.toBeInTheDocument();
    expect(
      container.querySelector('.rcx-button--with-badge'),
    ).not.toBeInTheDocument();
  });

  it('should hide the badge from assistive technology', () => {
    const { container } = render(
      <IconButtonWithBadge
        icon='balloon'
        aria-label='balloon, 2 unread messages'
        badge={<Badge>2</Badge>}
      />,
    );
    expect(
      screen.getByRole('button', { name: 'balloon, 2 unread messages' }),
    ).toBeInTheDocument();
    expect(container.querySelector('.rcx-button__badge')).toHaveAttribute(
      'aria-hidden',
      'true',
    );
  });
});
