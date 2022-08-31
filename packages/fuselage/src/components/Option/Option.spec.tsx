import { render } from '@testing-library/react';
import React from 'react';

import Option, { OptionContent } from '.';

it('renders without crashing', () => {
  render(
    <Option>
      <OptionContent>Lorem Ipsum Lorem</OptionContent>
    </Option>
  );
});
