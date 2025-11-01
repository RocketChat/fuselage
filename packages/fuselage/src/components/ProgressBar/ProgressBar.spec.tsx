import { render } from '../../testing.js';

import { ProgressBar } from './ProgressBar.js';

describe('[ProgressBar Component]', () => {
  it('renders without crashing', () => {
    render(<ProgressBar percentage={0} />);
  });
});
