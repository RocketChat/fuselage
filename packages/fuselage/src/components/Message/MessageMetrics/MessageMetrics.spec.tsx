import { render } from '@testing-library/react';
import React from 'react';

import MessageMetrics from '.';

it('renders without crashing', () => {
  render(
    <MessageMetrics>
      <MessageMetrics.Reply />
      <MessageMetrics.Item />
      <MessageMetrics.Following name='bell' />
    </MessageMetrics>
  );
});
