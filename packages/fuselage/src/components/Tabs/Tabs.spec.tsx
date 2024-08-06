import { render } from '@testing-library/react';

import { Tabs } from './Tabs';

describe('[Tabs Component]', () => {
  it('renders without crashing', () => {
    render(<Tabs />, { legacyRoot: true });
  });
});
