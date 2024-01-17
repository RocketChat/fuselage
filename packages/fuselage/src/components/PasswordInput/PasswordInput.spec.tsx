import { render } from '@testing-library/react';
import React from 'react';

import PasswordInput from './PasswordInput';

it('renders without crashing', () => {
  render(<PasswordInput />);
});
