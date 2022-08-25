import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import React from 'react';

import { Callout } from './Callout';
import * as stories from './Callout.stories';

const { Default, WithDescriptionOnly, Info, Success, Warning, Danger } =
  composeStories(stories);

describe('[Callout Component]', () => {
  describe('Storybook', () => {
    it.each([
      ['Default', Default],
      ['WithDescriptionOnly', WithDescriptionOnly],
      ['Info', Info],
      ['Success', Success],
      ['Warning', Warning],
      ['Danger', Danger],
    ])('renders %p story without crashing', (storyName, Story) => {
      render(<Story />);
    });

    it.each([
      ['.rcx-callout--type-info', 'info', Info],
      ['.rcx-callout--type-success', 'success', Success],
      ['.rcx-callout--type-warning', 'warning', Warning],
      ['.rcx-callout--type-danger', 'danger', Danger],
    ])('should have class %p when type is %p', (className, typeName, Story) => {
      const { container } = render(<Story />);
      expect(container.querySelector(className)).toBeInTheDocument();
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
});
