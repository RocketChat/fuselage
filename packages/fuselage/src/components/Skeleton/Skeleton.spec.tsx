import { render } from '@testing-library/react';

import { Skeleton } from './Skeleton';

describe('[Skeleton Component]', () => {
  it('renders without crashing', () => {
    render(<Skeleton />, { legacyRoot: true });
  });
});
