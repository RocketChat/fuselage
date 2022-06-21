import { render } from '@testing-library/react';
import React from 'react';

import { Label } from '.';

describe('[Label Component]', () => {
  it('renders without crashing', () => {
    render(<Label />);
  });
});
