import { render } from '../../testing';
import { Skeleton } from './Skeleton';

describe('[Skeleton Component]', () => {
  it('renders without crashing', () => {
    render(<Skeleton />);
  });
});
