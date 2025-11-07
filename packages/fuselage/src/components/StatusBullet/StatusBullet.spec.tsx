import { render } from '../../testing.js';

import { StatusBullet } from './StatusBullet.js';

describe('[StatusBullet Component]', () => {
  it('renders without crashing', () => {
    render(<StatusBullet />);
  });
});
