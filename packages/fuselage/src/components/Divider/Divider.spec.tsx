import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';

import * as stories from './Divider.stories';

const { Default } = composeStories(stories);

describe('[Divider Component]', () => {
  it('renders without crashing', () => {
    render(<Default />, { legacyRoot: true });
  });
});
