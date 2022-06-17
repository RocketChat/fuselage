import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';
import React from 'react';

import * as stories from './Button.stories';

const { Default, AsIconButton } = composeStories(stories);

describe('[Button Component]', () => {
  it('renders Button without crashing', () => {
    render(<Default />);
  });

  it('renders ActionButton without crashing', () => {
    render(<AsIconButton />);
  });
});
