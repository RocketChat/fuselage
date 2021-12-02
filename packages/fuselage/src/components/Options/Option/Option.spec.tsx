import { render } from '@testing-library/react';
import React from 'react';

import Option from '.';

it('renders without crashing', () => {
  render(
    <Option>
      <Option.Content>Lorem Ipsum Lorem</Option.Content>
    </Option>
  );
});
