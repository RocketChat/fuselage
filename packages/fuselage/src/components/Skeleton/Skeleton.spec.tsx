import { render } from '@testing-library/react';

import { Skeleton } from '.';

describe('[Skeleton Component]', () => {
  it('renders without crashing', () => {
    render(<Skeleton />);
  });
});
