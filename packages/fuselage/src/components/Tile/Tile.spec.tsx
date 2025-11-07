import { render } from '../../testing.js';

import Tile from './Tile.js';

describe('[Tile Component]', () => {
  it('renders without crashing', () => {
    render(<Tile />);
  });
});
