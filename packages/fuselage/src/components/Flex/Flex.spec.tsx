import { render } from '../../testing';

import { FlexContainer, FlexItem } from '.';

describe('[Flex Component]', () => {
  it('renders FlexContainer without crashing', () => {
    render(<FlexContainer />);
  });

  it('renders FlexItem without crashing', () => {
    render(<FlexItem />);
  });
});
