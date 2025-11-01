import { render } from '../../testing.js';

import Margins from './index.js';

describe('[Margins Component]', () => {
  it('renders without crashing', () => {
    render(<Margins />);
  });

  it('patches non-`Box` children', () => {
    const { container } = render(
      <Margins all='10px'>
        <div />
      </Margins>,
    );

    expect(container.firstElementChild).toHaveCssInJsClass();
  });
});
