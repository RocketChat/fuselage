import { render } from '@testing-library/react';
import React from 'react';

import { Modal } from '.';

it('renders without crashing', () => {
  render(<Modal />);
});
