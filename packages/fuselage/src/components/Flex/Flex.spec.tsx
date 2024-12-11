import { render } from '../../testing';

import Flex from '.';

describe('[Flex Component]', () => {
  it('renders Flex.Container without crashing', () => {
    render(<Flex.Container />);
  });

  it('renders Flex.Item without crashing', () => {
    render(<Flex.Item />);
  });
});
