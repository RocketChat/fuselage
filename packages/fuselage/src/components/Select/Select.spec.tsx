import { render } from '@testing-library/react';
import React from 'react';

import { Select } from '.';
import { options } from './Select.stories';

it('renders without crashing', () => {
  render(<Select options={options} onChange={() => undefined} />);
});
