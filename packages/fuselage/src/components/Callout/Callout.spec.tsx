import { render, screen } from '@testing-library/react';
import React from 'react';

import { testsFromStories } from '../../helpers/tests';
import { Callout } from './Callout';
import * as stories from './Callout.stories';

testsFromStories(stories);

it('should show title when this property is passed', () => {
  render(<Callout title='test-title' />);
  screen.getByText('test-title');
});

it('should display children', () => {
  render(<Callout>Children</Callout>);
  screen.getByText('Children');
});
