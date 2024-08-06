import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import { Badge } from './Badge';
import * as stories from './Badge.stories';

const { Default, Primary, Secondary, Danger, Warning, Disabled } =
  composeStories(stories);

describe('[Badge Component]', () => {
  describe('Story renders without crashing', () => {
    it('Default', () => {
      render(<Default />, { legacyRoot: true });
    });
    it('Primary', () => {
      render(<Primary />, { legacyRoot: true });
    });
    it('Secondary', () => {
      render(<Secondary />, { legacyRoot: true });
    });
    it('Danger', () => {
      render(<Danger />, { legacyRoot: true });
    });
    it('Warning', () => {
      render(<Warning />, { legacyRoot: true });
    });
    it('Disabled', () => {
      render(<Disabled />, { legacyRoot: true });
    });
  });

  it('should display children', () => {
    render(<Badge>Children</Badge>, { legacyRoot: true });
    screen.getByText('Children');
  });

  it('should have class according to variant', () => {
    const { container } = render(<Badge variant='primary' />, {
      legacyRoot: true,
    });
    expect(container.querySelector('.rcx-badge--primary')).toBeInTheDocument();
  });

  it('should have class passed as property', () => {
    const { container } = render(<Badge className='test-class' />, {
      legacyRoot: true,
    });
    expect(container.querySelector('.test-class')).toBeInTheDocument();
  });

  it('should show title when hovered', () => {
    const { container } = render(<Badge title='test-title' />, {
      legacyRoot: true,
    });
    const badgeTitle = container.querySelector('span');
    expect(badgeTitle?.getAttribute('title')).toEqual('test-title');
  });

  it('should have disabled class if it has the disabled property', () => {
    const { container } = render(<Badge disabled />, { legacyRoot: true });
    expect(container.querySelector('.rcx-badge--disabled')).toBeInTheDocument();
  });
});
