import { render } from '@testing-library/react';
import React from 'react';

import MessageReactions from '.';

it('renders without crashing', () => {
  render(
    <MessageReactions>
      <MessageReactions.Reaction />
      <MessageReactions.Action />
    </MessageReactions>
  );
});
