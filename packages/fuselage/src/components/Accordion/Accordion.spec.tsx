import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';
import React from 'react';

import { Accordion } from '.';
import * as stories from './Accordion.stories';

const { Default } = composeStories(stories);

describe('[Accordion Component]', () => {
  it('renders without crashing', () => {
    render(<Default />);
  });

  it('renders Accordion.Item without crashing', () => {
    render(<Accordion.Item title='' />);
  });
});
