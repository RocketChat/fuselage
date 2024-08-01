import { render } from '@testing-library/react';

import { Icon } from '.';

describe('[Icon Component]', () => {
  it('renders without crashing', () => {
    render(<Icon name='chat' />);
  });
});
