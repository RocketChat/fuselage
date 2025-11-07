import { render } from '../../testing.js';

import { Scrollable } from './Scrollable.js';

describe('Scrollabe Component', () => {
  it('renders without crashing', () => {
    render(<Scrollable />);
  });
});
