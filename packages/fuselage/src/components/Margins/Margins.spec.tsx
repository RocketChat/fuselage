import { render } from '@testing-library/react';
import React from 'react';

import Margins from '.';

it('renders without crashing', () => {
  render(<Margins />);
});

it('patches non-`Box` children', () => {
  const { container } = render(
    <Margins all='10px'>
      <div />
    </Margins>
  );

  expect(container.firstElementChild).toHaveAttribute(
    'class',
    expect.stringMatching('rcx-css-')
  );
});
