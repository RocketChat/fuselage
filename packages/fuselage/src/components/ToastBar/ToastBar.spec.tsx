import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import React from 'react';

import { ToastBar } from '.';

describe('[ToastBar Component]', () => {
  it('renders without crashing', () => {
    render(<ToastBar />);
  });

  it('should have no a11y violations', async () => {
    const { container } = render(<ToastBar />);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
