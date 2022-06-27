import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';
import React from 'react';

import * as stories from './CheckBox.stories';

const { Default } = composeStories(stories);

describe('[CheckBox Component]', () => {
  it('renders without crashing', () => {
    render(<Default />);
  });
});
