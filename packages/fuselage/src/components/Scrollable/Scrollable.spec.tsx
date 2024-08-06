import { render } from '@testing-library/react';

import { Scrollable } from './Scrollable';

describe('Scrollabe Component', () => {
  it('renders without crashing', () => {
    render(<Scrollable />, { legacyRoot: true });
  });
});
