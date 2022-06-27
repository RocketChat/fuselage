import { render } from '@testing-library/react';
import React from 'react';

import { NumberInput } from '.';

describe('[NumberInput Component]', () => {
  it('renders without crashing', () => {
    render(<NumberInput />);
  });
});
