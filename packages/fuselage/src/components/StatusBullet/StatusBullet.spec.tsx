import { render } from '@testing-library/react';
import React from 'react';

import { StatusBullet } from '.';

describe('[StatusBullet Component]', () => {
  it('renders without crashing', () => {
    render(<StatusBullet />);
  });
});
