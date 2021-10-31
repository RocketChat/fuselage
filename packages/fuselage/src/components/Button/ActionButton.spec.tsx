import { render } from '@testing-library/react';
import React from 'react';

import { ActionButton } from '.';

it('renders without crashing', () => {
  render(<ActionButton icon='arrow-back' />);
});
