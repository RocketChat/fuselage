import { composeStories } from '@storybook/react-vite';
import { withResizeObserverMock } from 'testing-utils/mocks/withResizeObserverMock';

import { render } from '../../testing.js';

import * as stories from './Select.stories.js';

const { Default } = composeStories(stories);

withResizeObserverMock();

describe('[Select Component]', () => {
  it('renders without crashing', () => {
    render(<Default {...Default.args} />);
  });
});
