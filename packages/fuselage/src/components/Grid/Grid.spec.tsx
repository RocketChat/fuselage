import { render } from '../../testing.js';

import { Grid } from './index.js';

describe('[Grid Component]', () => {
  it('renders Grid without crashing', () => {
    render(<Grid />);
  });

  it('renders Grid.Item without crashing', () => {
    render(<Grid.Item />);
  });
});
