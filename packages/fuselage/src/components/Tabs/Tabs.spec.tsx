import { render } from '@testing-library/react';
import React from 'react';

import { Tabs } from '.';

describe('[Tabs Component]', () => {
  it('renders without crashing', () => {
    render(<Tabs />);
  });
});
