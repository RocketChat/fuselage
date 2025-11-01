import { render } from '@testing-library/react';
import { it } from 'vitest';

import RocketChatLogo from './RocketChatLogo.js';

it('renders without crashing', () => {
  render(<RocketChatLogo />);
});
