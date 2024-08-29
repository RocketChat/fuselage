import { render } from '../../testing';
import { StatusBullet } from './StatusBullet';

describe('[StatusBullet Component]', () => {
  it('renders without crashing', () => {
    render(<StatusBullet />);
  });
});
