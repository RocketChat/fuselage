import { render } from '@testing-library/react';
import React from 'react';

import { TextInput } from '.';

describe('[TextInput]', () => {
  it('renders without crashing', () => {
    render(<TextInput />);
  });
});
