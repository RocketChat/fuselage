import { render } from '@testing-library/react';
import { it } from 'vitest';

import TaggedRocketChatLogo from './TaggedRocketChatLogo.js';

it('renders without crashing', () => {
  render(<TaggedRocketChatLogo />);
});
