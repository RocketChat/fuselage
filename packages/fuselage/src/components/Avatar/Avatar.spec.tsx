import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import React from 'react';

import * as stories from './Avatar.stories';

const { Default } = composeStories(stories);

describe('[Avatar Component]', () => {
  it('renders without crashing', () => {
    render(<Default />);
  });

  it('should render emoji avatar', () => {
    render(<Default emoji={{ children: '😄', name: '' }} />);

    expect(screen.getAllByText('😄').length).toBeGreaterThanOrEqual(1);
  });
});
