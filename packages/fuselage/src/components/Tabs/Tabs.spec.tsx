import { render } from '../../testing.js';

import { Tabs } from './Tabs.js';

describe('[Tabs Component]', () => {
  it('renders without crashing', () => {
    render(<Tabs />);
  });
});
