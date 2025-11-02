import { screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { render } from '../../../testing.js';

import { ThreadMessageOrigin } from './ThreadMessageOrigin.js';

describe('ThreadMessageOrigin', () => {
  it('renders without crashing', () => {
    render(<ThreadMessageOrigin />);
  });

  it('should render system variation', () => {
    render(<ThreadMessageOrigin system>system</ThreadMessageOrigin>);

    expect(screen.getByText('system')).toHaveClass(
      'rcx-message-thread__origin--system',
    );
  });
});
