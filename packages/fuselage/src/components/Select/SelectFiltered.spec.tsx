import { render } from '@testing-library/react';
import React from 'react';
import { withResizeObserverMock } from 'testing-utils/mocks/withResizeObserverMock';

import { SelectFiltered } from '.';

withResizeObserverMock();

it('renders without crashing', () => {
  render(<SelectFiltered options={[]} onChange={() => undefined} />);
});
