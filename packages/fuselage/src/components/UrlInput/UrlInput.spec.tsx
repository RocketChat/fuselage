import { render } from '@testing-library/react';
import React from 'react';

import UrlInput from '.';

it('renders without crashing', () => {
  render(<UrlInput />);
});
