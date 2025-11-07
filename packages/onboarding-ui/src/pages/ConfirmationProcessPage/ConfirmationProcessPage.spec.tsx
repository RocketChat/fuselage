import { render } from '@testing-library/react';
import { it } from 'vitest';

import ConfirmationProcessPage from './ConfirmationProcessPage.js';

it('renders without crashing', () => {
  render(<ConfirmationProcessPage />);
});
