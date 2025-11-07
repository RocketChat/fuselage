import { render } from '../../../testing.js';

import { MessageStatusIndicator, MessageStatusIndicatorItem } from './index.js';

it('renders without crashing', () => {
  render(
    <MessageStatusIndicator>
      <MessageStatusIndicatorItem name='star' variant='success' />
    </MessageStatusIndicator>,
  );
});
