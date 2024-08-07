import { render } from '../../testing';
import { ProgressBar } from './ProgressBar';

describe('[ProgressBar Component]', () => {
  it('renders without crashing', () => {
    render(<ProgressBar percentage={0} />);
  });
});
