import { composeStories } from '@storybook/react-vite';
import { withResizeObserverMock } from 'testing-utils/mocks/withResizeObserverMock';

import { render } from '../../testing.js';

import * as stories from './MultiSelect.stories.js';

const { Default } = composeStories(stories);

withResizeObserverMock();

describe('[MultiSelect Component]', () => {
  it('renders without crashing', () => {
    render(<Default />);
  });
});
