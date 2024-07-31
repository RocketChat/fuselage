import { render } from '@testing-library/react';

import Tile from '.';

describe('[Tile Component]', () => {
  it('renders without crashing', () => {
    render(<Tile />);
  });
});
