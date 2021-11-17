import { render } from '@testing-library/react';
import React from 'react';

import { FieldGroup } from '.';

it('renders without crashing', () => {
  render(<FieldGroup />);
});
