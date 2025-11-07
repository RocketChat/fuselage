import { composeStories } from '@storybook/react-vite';

import { render } from '../../testing.js';

import * as stories from './FieldGroup.stories.js';

const { Default } = composeStories(stories);

describe('[FieldGroup Component]', () => {
  it('renders without crashing', () => {
    render(<Default />);
  });
});
