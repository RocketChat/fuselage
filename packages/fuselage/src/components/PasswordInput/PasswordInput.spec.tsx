import { render } from '@testing-library/react';
import React from 'react';

import PasswordInput from '.';

describe('[PasswordInput Component]', () => {
  it('renders without crashing', () => {
    render(<PasswordInput />);
  });
});
