import { render } from '@testing-library/react';
import React from 'react';

import { TableFoot } from '.';

it('renders without crashing', () => {
  render(<TableFoot />, {
    wrapper: ({ children }) => <table>{children}</table>,
  });
});
