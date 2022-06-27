import { render } from '@testing-library/react';
import React from 'react';

import Modal from '.';

describe('[Modal Component]', () => {
  it('renders without crashing', () => {
    render(<Modal />);
  });
});
