import { render } from '@testing-library/react';
import React from 'react';

import { testsFromStories } from '../../helpers/tests';
import { Margins } from './Margins';
import * as stories from './Margins.stories';

testsFromStories(stories);

it('patches non-`Box` children', () => {
  const { container } = render(
    <Margins all='10px'>
      <div />
    </Margins>
  );

  expect(container.firstElementChild).toHaveCssInJsClass();
});
