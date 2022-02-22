import { render } from '@testing-library/react';
import React from 'react';

import Flex from '.';

describe('Flex.Container', () => {
  it('renders without crashing', () => {
    render(<Flex.Container />);
  });
});

describe('Flex.Item', () => {
  it('renders without crashing', () => {
    render(<Flex.Item />);
  });
});
