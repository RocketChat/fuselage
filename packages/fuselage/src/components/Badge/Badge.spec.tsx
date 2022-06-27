import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';
import React from 'react';

import * as stories from './Badge.stories';

const { Default } = composeStories(stories);

describe('[Badge Component]', () => {
  it('renders without crashing', () => {
    render(<Default />);
  });
});
