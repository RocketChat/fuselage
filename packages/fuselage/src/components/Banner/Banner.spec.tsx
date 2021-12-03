import { render } from '@testing-library/react';
import React from 'react';
import { withResizeObserverMock } from 'testing-utils/mocks/withResizeObserverMock';

import Banner from './Banner';

withResizeObserverMock();

it('renders without crashing', () => {
  render(<Banner />);
});
