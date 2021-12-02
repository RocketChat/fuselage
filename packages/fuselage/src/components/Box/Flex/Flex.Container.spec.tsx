import { render } from '@testing-library/react';
import React from 'react';

import Flex from '.';

it('renders without crashing', () => {
  render(<Flex.Container />);
});
