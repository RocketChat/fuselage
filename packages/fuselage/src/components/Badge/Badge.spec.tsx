import { composeStories } from '@storybook/react';
import { screen } from '@testing-library/react';

import { render } from '../../testing';

import { Badge } from './Badge';
import * as stories from './Badge.stories';

const { Default, Primary, Secondary, Danger, Warning, Disabled } =
  composeStories(stories);

describe('[Badge Component]', () => {
  describe('Story renders without crashing', () => {
    it('Default', () => {
      render(<Default />);
    });
    it('Primary', () => {
      render(<Primary />);
    });
    it('Secondary', () => {
      render(<Secondary />);
    });
    it('Danger', () => {
      render(<Danger />);
    });
    it('Warning', () => {
      render(<Warning />);
    });
    it('Disabled', () => {
      render(<Disabled />);
    });
  });

  it('should display children', () => {
    render(<Badge>Children</Badge>);
    screen.getByText('Children');
  });

  it('should have class according to variant', () => {
    const { container } = render(<Badge variant='primary' />);
    expect(container.querySelector('.rcx-badge--primary')).toBeInTheDocument();
  });

  it('should have class passed as property', () => {
    const { container } = render(<Badge className='test-class' />);
    expect(container.querySelector('.test-class')).toBeInTheDocument();
  });

  it('should show title when hovered', () => {
    const { container } = render(<Badge title='test-title' />);
    const badgeTitle = container.querySelector('span');
    expect(badgeTitle?.getAttribute('title')).toEqual('test-title');
  });

  it('should have disabled class if it has the disabled property', () => {
    const { container } = render(<Badge disabled />);
    expect(container.querySelector('.rcx-badge--disabled')).toBeInTheDocument();
  });
});
