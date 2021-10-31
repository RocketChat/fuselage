import { render } from '@testing-library/react';
import React from 'react';

import { Icon } from '.';

it('renders without crashing', () => {
  render(<Icon name='chat' />);
});
