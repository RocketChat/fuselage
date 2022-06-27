import { render } from '@testing-library/react';
import React from 'react';

import { ToastBar } from '.';

describe('[ToastBar Component]', () => {
  it('renders without crashing', () => {
    render(<ToastBar />);
  });
});
