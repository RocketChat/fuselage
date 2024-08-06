import { render } from '@testing-library/react';

import { Grid } from '.';

describe('[Grid Component]', () => {
  it('renders Grid without crashing', () => {
    render(<Grid />, { legacyRoot: true });
  });

  it('renders Grid.Item without crashing', () => {
    render(<Grid.Item />, { legacyRoot: true });
  });
});
