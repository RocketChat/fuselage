import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';
import React from 'react';

import * as stories from './EmailInput.stories';

const { Default } = composeStories(stories);

describe('[EmailInput Component]', () => {
  it('renders without crashing', () => {
    render(<Default />);
  });
});
