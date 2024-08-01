import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';
import { withResizeObserverMock } from 'testing-utils/mocks/withResizeObserverMock';

import * as stories from './MultiSelect.stories';

const { Default } = composeStories(stories);

withResizeObserverMock();

describe('[MultiSelect Component]', () => {
  it('renders without crashing', () => {
    render(<Default />);
  });
});
