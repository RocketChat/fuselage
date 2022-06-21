import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';
import React from 'react';

import Field from '.';
import * as stories from './Field.stories';

const { Default } = composeStories(stories);

describe('[Field Component]', () => {
  it('renders without crashing', () => {
    render(<Default />);
  });

  it('renders Field.Row without crashing', () => {
    render(<Field.Row />);
  });

  it('renders Field.Link without crashing', () => {
    render(<Field.Link />);
  });

  it('renders Field.Label without crashing', () => {
    render(<Field.Label />);
  });

  it('renders Field.Hint without crashing', () => {
    render(<Field.Hint />);
  });

  it('renders Field.Error without crashing', () => {
    render(<Field.Error />);
  });

  it('renders Field.Description without crashing', () => {
    render(<Field.Description />);
  });
});
