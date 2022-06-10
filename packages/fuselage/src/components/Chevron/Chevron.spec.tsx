import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';
import React from 'react';

import * as stories from './Chevron.stories';

const { Default } = composeStories(stories);

describe('[Chevron Component]', () => {
  it('renders without crashing', () => {
    render(<Default />);
  });
});
