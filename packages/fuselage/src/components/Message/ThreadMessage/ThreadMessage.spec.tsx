import { render } from '../../../testing.js';

import ThreadMessage from './index.js';

it('renders without crashing', () => {
  render(<ThreadMessage />);
});
