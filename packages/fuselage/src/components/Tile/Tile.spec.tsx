import { render } from '../../testing';
import Tile from './Tile';

describe('[Tile Component]', () => {
  it('renders without crashing', () => {
    render(<Tile />);
  });
});
