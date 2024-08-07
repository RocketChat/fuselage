import { screen } from '@testing-library/react';

import { render } from '../../../testing';
import { ThreadMessageOrigin } from './ThreadMessageOrigin';

describe('ThreadMessageOrigin', () => {
  it('renders without crashing', () => {
    render(<ThreadMessageOrigin />);
  });

  it('should render system variation', () => {
    render(<ThreadMessageOrigin system>system</ThreadMessageOrigin>);

    expect(screen.getByText('system')).toHaveClass(
      'rcx-message-thread__origin--system'
    );
  });
});
