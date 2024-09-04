import ThreadMessage from '.';
import { render } from '../../../testing';

it('renders without crashing', () => {
  render(<ThreadMessage />);
});
