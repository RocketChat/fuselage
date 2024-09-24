import { composeStories } from '@storybook/react';
import { withResizeObserverMock } from 'testing-utils/mocks/withResizeObserverMock';

import { render } from '../../testing';
import * as stories from './Select.stories';

const { Default } = composeStories(stories);

withResizeObserverMock();

describe('[Select Component]', () => {
  it('renders without crashing', () => {
    render(<Default {...Default.args} />);
  });
});
