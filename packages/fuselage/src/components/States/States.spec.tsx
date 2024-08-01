import { render } from '@testing-library/react';

import { States } from '.';

describe('[States Component]', () => {
  it('renders without crashing', () => {
    render(<States />);
  });
});
