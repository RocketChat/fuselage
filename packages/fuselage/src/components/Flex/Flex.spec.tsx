import { render } from '../../testing.js';

import Flex from './index.js';

describe('[Flex Component]', () => {
  it('renders Flex.Container without crashing', () => {
    render(<Flex.Container />);
  });

  it('renders Flex.Item without crashing', () => {
    render(<Flex.Item />);
  });
});
