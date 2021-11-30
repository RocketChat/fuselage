import { render } from '@testing-library/react';
import React from 'react';

import { Accordion } from '.';

it('renders without crashing', () => {
  render(<Accordion.Item title='' />);
});
