import { render } from '../../testing.js';

import { Icon } from './index.js';

describe('[Icon Component]', () => {
  it('renders without crashing', () => {
    render(<Icon name='chat' />);
  });
});
