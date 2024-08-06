import { render } from '@testing-library/react';

import Margins from '.';

describe('[Margins Component]', () => {
  it('renders without crashing', () => {
    render(<Margins />, { legacyRoot: true });
  });

  it('patches non-`Box` children', () => {
    const { container } = render(
      <Margins all='10px'>
        <div />
      </Margins>,
      { legacyRoot: true }
    );

    expect(container.firstElementChild).toHaveCssInJsClass();
  });
});
