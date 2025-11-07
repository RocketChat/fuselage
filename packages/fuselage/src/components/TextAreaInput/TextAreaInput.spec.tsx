import { render } from '../../testing.js';

import { TextAreaInput } from './TextAreaInput.js';

describe('[TextAreaInput]', () => {
  it('renders without crashing', () => {
    render(<TextAreaInput />);
  });
});
