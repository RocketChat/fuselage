import { render } from '../../../testing.js';
import { it } from 'vitest';
import ThreadMessage from './index.js';

it('renders without crashing', () => {
  render(<ThreadMessage />);
});
