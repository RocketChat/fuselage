import { render } from '../../testing';
import { Pagination } from './Pagination';

describe('[Pagination Component]', () => {
  it('renders without crashing', () => {
    render(<Pagination count={0} />);
  });
});
