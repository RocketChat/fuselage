import { render } from '@testing-library/react';
import React from 'react';

import { SelectInput } from '.';

it('renders without crashing', () => {
  render(<SelectInput options={[]} onChange={() => {}} addon={undefined} />);
});
