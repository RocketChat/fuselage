import { render } from '../../testing.js';

import { Pagination } from './Pagination.js';

describe('[Pagination Component]', () => {
  it('renders without crashing', () => {
    render(<Pagination count={0} />);
  });
});
