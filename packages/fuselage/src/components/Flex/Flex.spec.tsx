import { render } from '@testing-library/react';

import Flex from '.';

describe('[Flex Component]', () => {
  it('renders Flex.Container without crashing', () => {
    render(<Flex.Container />, { legacyRoot: true });
  });

  it('renders Flex.Item without crashing', () => {
    render(<Flex.Item />, { legacyRoot: true });
  });
});
