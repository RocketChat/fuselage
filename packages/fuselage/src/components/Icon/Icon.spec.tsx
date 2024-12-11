import { render } from '../../testing';

import { Icon } from '.';

describe('[Icon Component]', () => {
  it('renders without crashing', () => {
    render(<Icon name='chat' />);
  });
});
