import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import React from 'react';

import * as stories from './Badge.stories';

const { Default, Disabled } = composeStories(stories);

describe('[Badge Component]', () => {
  it('renders without crashing', () => {
    render(<Default />);
  });

  it('should display children', () => {
    render(<Default>Children</Default>);
    screen.getByText('Children');
  });

  it('should have class according to variant', () => {
    const { container } = render(<Default variant='primary' />);
    expect(container.querySelector('.rcx-badge--primary')).toBeInTheDocument();
  });

  it('should have class passed as property', () => {
    const { container } = render(<Default className='test-class' />);
    expect(container.querySelector('.test-class')).toBeInTheDocument();
  });

  it('should show title when hovered', () => {
    const { container } = render(<Default title='test-title' />);
    const badgeTitle = container.querySelector('span');
    expect(badgeTitle?.getAttribute('title')).toEqual('test-title');
  });

  it('should have disabled class if it has the disabled property', () => {
    const { container } = render(<Disabled />);
    expect(container.querySelector('.rcx-badge--disabled')).toBeInTheDocument();
  });
});
