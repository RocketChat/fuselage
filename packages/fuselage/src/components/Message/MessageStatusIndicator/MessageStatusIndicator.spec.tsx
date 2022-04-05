import { render } from '@testing-library/react';
import React from 'react';

import { MessageStatusIndicator, MessageStatusIndicatorItem } from '.';

it('renders without crashing', () => {
  render(
    <MessageStatusIndicator>
      <MessageStatusIndicatorItem name='star' variant='success' />
    </MessageStatusIndicator>
  );
});
