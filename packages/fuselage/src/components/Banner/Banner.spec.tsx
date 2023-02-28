import { render, screen } from '@testing-library/react';
import React from 'react';
import { withResizeObserverMock } from 'testing-utils/mocks/withResizeObserverMock';

import { testsFromStories } from '../../helpers/tests';
import Banner from './Banner';
import * as stories from './Banner.stories';

withResizeObserverMock();

testsFromStories(stories);

it('renders with link', () => {
  render(<Banner link='https://rocket.chat' linkText='More info' />);
  expect(
    screen.getByRole('link', {
      name: /more info/i,
    })
  ).toBeInTheDocument();
});
