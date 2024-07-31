import { render } from '@testing-library/react';

import StatusBullet from './StatusBullet';

describe('[StatusBullet Component]', () => {
  it('renders without crashing', () => {
    render(<StatusBullet />);
  });
});
