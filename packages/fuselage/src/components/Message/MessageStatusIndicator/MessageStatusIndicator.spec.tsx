import { render } from '../../../testing';

import { MessageStatusIndicator, MessageStatusIndicatorItem } from '.';

it('renders without crashing', () => {
  render(
    <MessageStatusIndicator>
      <MessageStatusIndicatorItem name='star' variant='success' />
    </MessageStatusIndicator>,
  );
});
