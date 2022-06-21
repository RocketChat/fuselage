import { render } from '@testing-library/react';
import React from 'react';

import { RadioButton } from '.';

describe('RadioButton Component', () => {
  it('renders without crashing', () => {
    render(<RadioButton />);
  });
});
