import { render, screen } from '@testing-library/react';

import { ThreadMessageOrigin } from './ThreadMessageOrigin';

describe('ThreadMessageOrigin', () => {
  it('renders without crashing', () => {
    render(<ThreadMessageOrigin />, { legacyRoot: true });
  });

  it('should render system variation', () => {
    render(<ThreadMessageOrigin system>system</ThreadMessageOrigin>, {
      legacyRoot: true,
    });

    expect(screen.getByText('system')).toHaveClass(
      'rcx-message-thread__origin--system'
    );
  });
});
