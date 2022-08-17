import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import React from 'react';

import { Callout } from './Callout';
import * as stories from './Callout.stories';

const { Default, WithDescriptionOnly, Info, Success, Warning, Danger } =
  composeStories(stories);

describe('[Callout Component]', () => {
  describe('Story renders without crashing', () => {
    it('Default', () => {
      render(<Default />);
    });
    it('WithDescriptionOnly', () => {
      render(<WithDescriptionOnly />);
    });
    it('Info', () => {
      render(<Info />);
    });
    it('Success', () => {
      render(<Success />);
    });
    it('Warning', () => {
      render(<Warning />);
    });
    it('Danger', () => {
      render(<Danger />);
    });
  });

  it('should show title when this property is passed', () => {
    render(<Callout title='test-title' />);
    screen.getByText('test-title');
  });

  it('should display children', () => {
    render(<Callout>Children</Callout>);
    screen.getByText('Children');
  });

  it.each([
    ['.rcx-callout--type-info', 'info' as const],
    ['.rcx-callout--type-success', 'success' as const],
    ['.rcx-callout--type-warning', 'warning' as const],
    ['.rcx-callout--type-danger', 'danger' as const],
  ])('should have class %p when type is %p', (className, type) => {
    const { container } = render(<Callout type={type} />);
    expect(container.querySelector(className)).toBeInTheDocument();
  });
});
