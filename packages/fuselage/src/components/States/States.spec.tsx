import { render } from '@testing-library/react';

import States from './States';

describe('[States Component]', () => {
  it('renders without crashing', () => {
    render(<States />, { legacyRoot: true });
  });
});
