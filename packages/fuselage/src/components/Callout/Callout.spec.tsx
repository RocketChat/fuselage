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
    ])('Story %p renders without crashing', (storyName, Story) => {
      render(<Story />);
    });

    it.each([
      ['Info', '.rcx-callout--type-info', Info],
      ['Success', '.rcx-callout--type-success', Success],
      ['Warning', '.rcx-callout--type-warning', Warning],
      ['Danger', '.rcx-callout--type-danger', Danger],
    ])('story %p should have class %p', (storyName, className, Story) => {
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
