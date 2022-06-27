import { render } from '@testing-library/react';
import React from 'react';

import { TelephoneInput } from '.';

describe('[TelephoneInput Component]', () => {
  it('renders without crashing', () => {
    render(<TelephoneInput />);
  });
});
