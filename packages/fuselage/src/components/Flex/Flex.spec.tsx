import { render } from '@testing-library/react';
import React from 'react';

import Flex from '.';

describe('[Flex Component]', () => {
  it('renders Flex.Container without crashing', () => {
    render(<Flex.Container />);
  });

  it('renders Flex.Item without crashing', () => {
    render(<Flex.Item />);
  });
});
