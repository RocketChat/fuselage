import { render } from '@testing-library/react';
import React from 'react';

import {
  MessageSystem,
  MessageSystemLeftContainer,
  MessageSystemContainer,
  MessageSystemBlock,
  MessageSystemName,
  MessageSystemBody,
  MessageSystemTimestamp,
} from '.';

it('renders without crashing', () => {
  render(
    <MessageSystem>
      <MessageSystemLeftContainer></MessageSystemLeftContainer>
      <MessageSystemContainer>
        <MessageSystemBlock>
          <MessageSystemName>Haylie George</MessageSystemName>
          <MessageSystemBody>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat a duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam...
          </MessageSystemBody>
          <MessageSystemTimestamp>12:00 PM</MessageSystemTimestamp>
        </MessageSystemBlock>
      </MessageSystemContainer>
    </MessageSystem>
  );
});
