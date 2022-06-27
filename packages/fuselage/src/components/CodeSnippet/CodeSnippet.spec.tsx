import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';
import React from 'react';

import * as stories from './CodeSnippet.stories';

const { Default } = composeStories(stories);

describe('[CodeSnippet Component]', () => {
  it('renders without crashing', () => {
    render(<Default />);
  });
});
