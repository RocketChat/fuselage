import { render } from '@testing-library/react';

import Tile from './Tile';

describe('[Tile Component]', () => {
  it('renders without crashing', () => {
    render(<Tile />, { legacyRoot: true });
  });
});
