import { composeStories } from '@storybook/react';
import { withResizeObserverMock } from 'testing-utils/mocks/withResizeObserverMock';

import { render } from '../../testing';
import * as stories from './MultiSelect.stories';

const { Default } = composeStories(stories);

withResizeObserverMock();

describe('[MultiSelect Component]', () => {
  it('renders without crashing', () => {
    render(<Default />);
  });
});
