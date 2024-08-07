import Flex from '.';
import { render } from '../../testing';

describe('[Flex Component]', () => {
  it('renders Flex.Container without crashing', () => {
    render(<Flex.Container />);
  });

  it('renders Flex.Item without crashing', () => {
    render(<Flex.Item />);
  });
});
