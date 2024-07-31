import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';

import * as stories from './Sidebar.stories';

const { Default } = composeStories(stories);

describe('[Sidebar Component]', () => {
  it('renders without crashing', () => {
    render(<Default />);
  });
});
