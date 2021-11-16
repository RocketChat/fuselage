import { render } from '@testing-library/react';
import React from 'react';
import { withResizeObserverMock } from 'testing-utils/mocks/withResizeObserverMock';

import { AutoComplete } from '.';

withResizeObserverMock();

it('renders without crashing', () => {
  render(
    <AutoComplete
      filter=''
      value={[]}
      renderItem={() => null}
      onChange={jest.fn()}
    />
  );
});
