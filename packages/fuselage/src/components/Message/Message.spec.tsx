import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';

import * as stories from './Messages.stories';

const { Default } = composeStories(stories);

describe('[Message Component]', () => {
  it('renders without crashing', () => {
    render(<Default />, { legacyRoot: true });
  });
});
