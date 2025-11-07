import { render } from '@testing-library/react';
import { it } from 'vitest';

import EmailConfirmedPage from './EmailConfirmedPage.js';

it('renders without crashing', () => {
  render(<EmailConfirmedPage />);
});
