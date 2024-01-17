import { render } from '@testing-library/react';
import React from 'react';

import FlexContainer from './FlexContainer';
import FlexItem from './FlexItem';

it('renders Flex.Container without crashing', () => {
  render(<FlexContainer />);
});

it('renders Flex.Item without crashing', () => {
  render(<FlexItem />);
});
