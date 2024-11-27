import { render } from '../../testing';

import { Grid } from '.';

describe('[Grid Component]', () => {
  it('renders Grid without crashing', () => {
    render(<Grid />);
  });

  it('renders Grid.Item without crashing', () => {
    render(<Grid.Item />);
  });
});
