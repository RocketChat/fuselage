import { render } from '@testing-library/react';
import React from 'react';
import { withResizeObserverMock } from 'testing-utils/mocks/withResizeObserverMock';

import { Select } from '.';

withResizeObserverMock();

it('renders without crashing', () => {
  render(<Select options={[]} onChange={() => undefined} />);
});
