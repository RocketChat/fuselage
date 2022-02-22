import { render } from '@testing-library/react';
import React from 'react';
import { withResizeObserverMock } from 'testing-utils/mocks/withResizeObserverMock';

import { Select } from '.';
import { options } from './Select.stories';

withResizeObserverMock();

it('renders without crashing', () => {
  render(<Select options={options} onChange={() => undefined} />);
});
