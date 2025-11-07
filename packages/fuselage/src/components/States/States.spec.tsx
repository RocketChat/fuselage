import { render } from '../../testing.js';

import States from './States.js';

describe('[States Component]', () => {
  it('renders without crashing', () => {
    render(<States />);
  });
});
