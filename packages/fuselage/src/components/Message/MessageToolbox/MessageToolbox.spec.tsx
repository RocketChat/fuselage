import { render } from '@testing-library/react';
import React from 'react';

import MessageToolbox from '.';

it('renders without crashing', () => {
  render(
    <MessageToolbox>
      <MessageToolbox.Item icon='quote' />
      <MessageToolbox.Item icon='emoji' />
      <MessageToolbox.Item icon='thread' />
      <MessageToolbox.Item icon='menu' />
    </MessageToolbox>
  );
});
